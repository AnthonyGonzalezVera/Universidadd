import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';
import { PaginationDto } from 'src/pagination/pagination.dto';

@Injectable()
export class CareerService {
  constructor(private readonly prisma: PrismaAcademicService) { }

  private readonly careerIncludes = {
    subjects: true
  }

  async create(createCareerDto: CreateCareerDto) {
    try {
      const career = await this.prisma.career.create({
        data: {
          name: createCareerDto.name,
          totalCicles: createCareerDto.totalCicles,
          durationYears: createCareerDto.durationYears
        }
      })
      return career;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }

  async findAll(findWithPagination: PaginationDto) {
    const { page = 1, limit = 10 } = findWithPagination;
    const skip = (page - 1) * limit;

    try {
      const [data, total] = await Promise.all([
        this.prisma.career.findMany({
          skip,
          take: limit,
          include: this.careerIncludes
        }),
        this.prisma.career.count()
      ]);

      return {
        data,
        total,
        page,
        limit
      };

    } catch (error) {
      throw new InternalServerErrorException('Error fetching careers');
    }
  }

  async findOne(id: number) {
    try {
      const career = await this.prisma.career.findUnique({
        where: { id },
        include: this.careerIncludes
      });
      return career;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new InternalServerErrorException('Error fetching career');
    }
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    try {
      const updatedCareer = await this.prisma.career.update({
        where: { id },
        data: updateCareerDto,
        include: this.careerIncludes
      });
      return updatedCareer;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating career');
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.career.delete({
        where: { id }
      });
      return { message: `Career with ID ${id} has been successfully removed` };
    } catch (error) {
    }
  }
}
