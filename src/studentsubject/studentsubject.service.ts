import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateStudentsubjectDto } from './dto/create-studentsubject.dto';
import { UpdateStudentsubjectDto } from './dto/update-studentsubject.dto';
import { PrismaProfilesService } from 'src/prisma/prisma-profiles.service';
import { PaginationDto } from 'src/pagination/pagination.dto';

@Injectable()
export class StudentsubjectService {
  constructor(private readonly prisma: PrismaProfilesService) { }

  private readonly studentSubjectIncludes = {
    studentProfile: {
      include: {
        user: true,
        career: true
      }
    },
    subject: {
      include: {
        career: true,
        subjectAssignments: {
          include: {
            teacherProfile: true
          }
        }
      }
    }
  }

  async create(createStudentsubjectDto: CreateStudentsubjectDto) {
    try {
      const existingEnrollment = await this.prisma.studentSubject.findFirst({
        where: {
          studentProfileId: createStudentsubjectDto.studentProfileId,
          subjectId: createStudentsubjectDto.subjectId
        }
      });

      if (existingEnrollment) {
        throw new ConflictException('Student is already enrolled in this subject');
      }

      const studentSubject = await this.prisma.studentSubject.create({
        data: createStudentsubjectDto,
        include: this.studentSubjectIncludes
      });

      return studentSubject;

    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }

      throw new InternalServerErrorException('Error enrolling student in subject');
    }
  }

  async findAll(findWithPagination: PaginationDto) {
    const { page = 1, limit = 10 } = findWithPagination;
    const skip = (page - 1) * limit;

    try {
      const [data, total] = await Promise.all([
        this.prisma.studentSubject.findMany({
          skip,
          take: limit,
          include: this.studentSubjectIncludes
        }),
        this.prisma.studentSubject.count()
      ]);

      return {
        data,
        total,
        page,
        limit
      };

    } catch (error) {
      throw new InternalServerErrorException('Error fetching student enrollments');
    }
  }

  async findOne(id: number) {
    try {
      const studentSubject = await this.prisma.studentSubject.findUnique({
        where: { id },
        include: this.studentSubjectIncludes
      });

      if (!studentSubject) {
        throw new NotFoundException('Student enrollment not found');
      }

      return studentSubject;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching student enrollment');
    }
  }

  async update(id: number, updateStudentsubjectDto: UpdateStudentsubjectDto) {
    try {
      const existingStudentSubject = await this.prisma.studentSubject.findUnique({
        where: { id }
      });

      if (!existingStudentSubject) {
        throw new NotFoundException(`Student Subject relationship with ID ${id} not found`);
      }

      if (updateStudentsubjectDto.studentProfileId || updateStudentsubjectDto.subjectId) {
        const duplicateEnrollment = await this.prisma.studentSubject.findFirst({
          where: {
            studentProfileId: updateStudentsubjectDto.studentProfileId,
            subjectId: updateStudentsubjectDto.subjectId,
            id: { not: id }
          }
        });

        if (duplicateEnrollment) {
          throw new ConflictException(`This student is already enrolled in this subject`);
        }
      }

      const updatedStudentSubject = await this.prisma.studentSubject.update({
        where: { id },
        data: updateStudentsubjectDto,
        include: this.studentSubjectIncludes
      });

      return updatedStudentSubject;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating student subject relationship');
    }
  }

  async remove(id: number) {
    try {
      const existingStudentSubject = await this.prisma.studentSubject.findUnique({
        where: { id }
      });

      if (!existingStudentSubject) {
        throw new NotFoundException(`Student Subject relationship with ID ${id} not found`);
      }

      await this.prisma.studentSubject.delete({
        where: { id }
      });

      return { message: `Student Subject relationship with ID ${id} has been successfully removed` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error removing student subject relationship');
    }
  }

  async findEnrollmentsByPeriod(studentId: number, cycleId: number) {
    try {
      return await this.prisma.studentSubject.findMany({
        where: {
          studentProfile: { userId: studentId },
          subject: { id: cycleId } // Ajustado basándose en la estructura probable
        },
        include: (this as any).studentSubjectIncludes
      });
    } catch (error) {
      throw new InternalServerErrorException('Error fetching enrollments by period');
    }
  }

  async enrollWithTransaction(studentId: number, subjectId: number) {
    try {
      return await (this.prisma as any).$transaction(async (tx: any) => {
        // 1. Verificar que el estudiante esté activo
        const student = await tx.userReference.findUnique({
          where: { id: studentId },
          include: { studentProfile: true }
        });

        if (!student || student.status !== 'active' || student.roleId !== 3) {
          throw new ConflictException('Student is not active or not found');
        }

        const studentProfileId = student.studentProfile.id;

        // 2. Verificar capacidad de la materia
        const subject = await tx.subjectReference.findUnique({
          where: { id: subjectId }
        });

        if (!subject) {
          throw new NotFoundException('Subject not found');
        }

        if (subject.capacity <= 0) {
          throw new ConflictException('No available capacity for this subject');
        }

        // Verificar si ya está matriculado
        const existingEnrollment = await tx.studentSubject.findUnique({
          where: {
            studentProfileId_subjectId: {
              studentProfileId,
              subjectId
            }
          }
        });

        if (existingEnrollment) {
          throw new ConflictException('Student is already enrolled in this subject');
        }

        // 3. Registrar la matrícula
        const enrollment = await tx.studentSubject.create({
          data: {
            studentProfileId,
            subjectId,
            status: 'enrolled'
          }
        });

        // 4. Disminuir la capacidad disponible
        await tx.subjectReference.update({
          where: { id: subjectId },
          data: {
            capacity: { decrement: 1 }
          }
        });

        return enrollment;
      });
    } catch (error) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error during transactional enrollment: ' + error.message);
    }
  }
}
