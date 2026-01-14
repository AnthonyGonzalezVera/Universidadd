import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaProfilesService } from 'src/prisma/prisma-profiles.service';
import { PaginationDto } from 'src/pagination/pagination.dto';

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaProfilesService) { }

  private readonly teacherIncludes = {
    speciality: true,
    career: true,
    subjects: true
  }

  async findAll(findWithPagination: PaginationDto) {
    const { page = 1, limit = 10 } = findWithPagination;
    const skip = (page - 1) * limit;

    try {
      const [data, total] = await Promise.all([
        this.prisma.userReference.findMany({
          where: { roleId: 2 }, // 2 = TEACHER
          skip,
          take: limit,
          include: {
            teacherProfile: {
              include: {
                speciality: true,
                career: true,
                subjects: true
              }
            }
          }
        }),
        this.prisma.userReference.count({ where: { roleId: 2 } })
      ]);

      return {
        data,
        total,
        page,
        limit
      };

    } catch (error) {
      throw new InternalServerErrorException('Error fetching teachers');
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.userReference.findUnique({
        where: { id },
        include: {
          teacherProfile: {
            include: {
              speciality: true,
              career: true,
              subjects: true
            }
          }
        }
      });

      if (!user || user.roleId !== 2) {
        throw new NotFoundException('Teacher not found');
      }

      return user;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching teacher');
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    try {
      const user = await this.prisma.userReference.findUnique({
        where: { id }
      });

      if (!user || user.roleId !== 2) {
        throw new NotFoundException(`Teacher with ID ${id} not found`);
      }

      if (updateTeacherDto.email) {
        const duplicateEmail = await this.prisma.userReference.findFirst({
          where: {
            email: updateTeacherDto.email,
            id: { not: id }
          }
        });

        if (duplicateEmail) {
          throw new ConflictException(`User with email ${updateTeacherDto.email} already exists`);
        }
      }

      // Prepare update data for user (UserReference only has name and email)
      const userUpdateData = {
        ...(updateTeacherDto.name && { name: updateTeacherDto.name }),
        ...(updateTeacherDto.email && { email: updateTeacherDto.email }),
        // phone and age are not in UserReference
      };

      // Prepare update data for teacher profile
      const profileUpdateData = {
        ...(updateTeacherDto.specialityId && { specialityId: updateTeacherDto.specialityId }),
        ...(updateTeacherDto.careerId && { careerId: updateTeacherDto.careerId }),
      };

      // Update user and profile
      const updatedUser = await this.prisma.userReference.update({
        where: { id },
        data: {
          ...userUpdateData,
          ...(Object.keys(profileUpdateData).length > 0 && {
            teacherProfile: {
              update: profileUpdateData
            }
          })
        },
        include: {
          teacherProfile: {
            include: {
              speciality: true,
              career: true,
              subjects: true
            }
          }
        }
      });

      return updatedUser;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating teacher');
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.userReference.findUnique({
        where: { id }
      });

      if (!user || user.roleId !== 2) {
        throw new NotFoundException(`Teacher with ID ${id} not found`);
      }

      // Delete will cascade to teacherProfile due to the schema configuration
      await this.prisma.userReference.delete({
        where: { id }
      });

      return { message: `Teacher with ID ${id} has been successfully removed` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error removing teacher');
    }
  }

  async findTeachersWithMultipleSubjects() {
    try {
      const teachers = await (this.prisma as any).userReference.findMany({
        where: {
          roleId: 2,
          teacherProfile: {
            subjects: {
              some: {}
            }
          }
        },
        include: {
          teacherProfile: {
            include: {
              _count: {
                select: { subjects: true }
              },
              subjects: true
            }
          }
        }
      });

      return teachers.filter(t => (t.teacherProfile?._count.subjects || 0) > 1);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching teachers with multiple subjects');
    }
  }

  async filterTeachersByStatusAndSubjects() {
    try {
      // Lógica solicitada: (full-time AND teach subjects) OR NOT inactive
      // Como no hay campo "full-time", usaremos un placeholder o verificaremos el status.
      // Prisma no tiene "NOT inactive" directamente si no sabemos qué estados existen aparte de 'active'.
      // Usaremos status: { not: 'inactive' }

      return await (this.prisma as any).userReference.findMany({
        where: {
          roleId: 2,
          OR: [
            {
              AND: [
                { status: 'active' }, // Asumimos active como placeholder para full-time o similar
                {
                  teacherProfile: {
                    subjects: { some: {} }
                  }
                }
              ]
            },
            {
              status: { not: 'inactive' }
            }
          ]
        },
        include: {
          teacherProfile: {
            include: {
              subjects: {
                include: {
                  subject: true
                }
              }
            }
          }
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('Error filtering teachers by status and subjects');
    }
  }
}
