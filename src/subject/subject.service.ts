import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';
import { PaginationDto } from 'src/pagination/pagination.dto';

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaAcademicService) { }

  private readonly subjectIncludes = {
    career: true
  }

  async create(createSubjectDto: CreateSubjectDto) {
    try {
      const existingSubject = await this.prisma.subject.findFirst({
        where: {
          name: createSubjectDto.name,
          careerId: createSubjectDto.careerId,
          cicleNumber: createSubjectDto.cicleNumber
        }
      });

      if (existingSubject) {
        throw new ConflictException('Subject already exists in this career and cycle');
      }

      const subject = await this.prisma.subject.create({
        data: createSubjectDto,
        include: this.subjectIncludes
      });

      return subject;

    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }

      throw new InternalServerErrorException('Error creating subject');
    }
  }

  async findAll(findWithPagination: PaginationDto) {
    const { page = 1, limit = 10 } = findWithPagination;
    const skip = (page - 1) * limit;

    try {
      const [data, total] = await Promise.all([
        this.prisma.subject.findMany({
          skip,
          take: limit,
          include: this.subjectIncludes
        }),
        this.prisma.subject.count()
      ]);

      return {
        data,
        total,
        page,
        limit
      };

    } catch (error) {
      throw new InternalServerErrorException('Error fetching subjects');
    }
  }

  async findOne(id: number) {
    try {
      const subject = await this.prisma.subject.findUnique({
        where: { id },
        include: this.subjectIncludes
      });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }

      return subject;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching subject');
    }
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    try {
      const existingSubject = await this.prisma.subject.findUnique({
        where: { id }
      });

      if (!existingSubject) {
        throw new NotFoundException(`Subject with ID ${id} not found`);
      }

      if (updateSubjectDto.name || updateSubjectDto.careerId || updateSubjectDto.cicleNumber) {
        const duplicateSubject = await this.prisma.subject.findFirst({
          where: {
            name: updateSubjectDto.name || existingSubject.name,
            careerId: updateSubjectDto.careerId || existingSubject.careerId,
            cicleNumber: updateSubjectDto.cicleNumber || existingSubject.cicleNumber,
            id: { not: id }
          }
        });

        if (duplicateSubject) {
          throw new ConflictException(`A subject with these details already exists in this career and cycle`);
        }
      }

      const updatedSubject = await this.prisma.subject.update({
        where: { id },
        data: updateSubjectDto,
        include: this.subjectIncludes
      });

      return updatedSubject;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating subject');
    }
  }

  async remove(id: number) {
    try {
      const existingSubject = await this.prisma.subject.findUnique({
        where: { id }
      });

      if (!existingSubject) {
        throw new NotFoundException(`Subject with ID ${id} not found`);
      }

      await this.prisma.subject.delete({
        where: { id }
      });

      return { message: `Subject with ID ${id} has been successfully removed` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error removing subject');
    }
  }
}
