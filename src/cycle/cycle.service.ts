import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { UpdateCycleDto } from './dto/update-cycle.dto';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';
import { PaginationDto } from 'src/pagination/pagination.dto';

@Injectable()
export class CycleService {
  constructor(private prisma: PrismaAcademicService) { }

  async create(createCycleDto: CreateCycleDto) {
    try {
      // Si se marca como activo, desactivar otros ciclos
      if (createCycleDto.isActive) {
        await this.prisma.cycle.updateMany({
          where: { isActive: true },
          data: { isActive: false },
        });
      }

      const cycle = await this.prisma.cycle.create({
        data: {
          name: createCycleDto.name,
          year: createCycleDto.year,
          period: createCycleDto.period,
          startDate: new Date(createCycleDto.startDate),
          endDate: new Date(createCycleDto.endDate),
          isActive: createCycleDto.isActive ?? false,
        },
      });

      return cycle;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe un ciclo para ese año y periodo');
      }
      throw new InternalServerErrorException('Error al crear el ciclo');
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    try {
      const [cycles, total] = await Promise.all([
        this.prisma.cycle.findMany({
          skip,
          take: limit,
          orderBy: [{ year: 'desc' }, { period: 'desc' }],
          include: {
            _count: {
              select: { subjects: true },
            },
          },
        }),
        this.prisma.cycle.count(),
      ]);

      return {
        data: cycles,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener los ciclos');
    }
  }

  async findOne(id: number) {
    try {
      const cycle = await this.prisma.cycle.findUnique({
        where: { id },
        include: {
          subjects: {
            include: {
              career: true,
            },
          },
        },
      });

      if (!cycle) {
        throw new NotFoundException(`Ciclo con ID ${id} no encontrado`);
      }

      return cycle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error al obtener el ciclo');
    }
  }

  async findActive() {
    try {
      const cycle = await this.prisma.cycle.findFirst({
        where: { isActive: true },
        include: {
          _count: {
            select: { subjects: true },
          },
        },
      });

      if (!cycle) {
        throw new NotFoundException('No hay un ciclo activo');
      }

      return cycle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error al obtener el ciclo activo');
    }
  }

  async update(id: number, updateCycleDto: UpdateCycleDto) {
    try {
      // Verificar que el ciclo existe
      await this.findOne(id);

      // Si se marca como activo, desactivar otros ciclos
      if (updateCycleDto.isActive) {
        await this.prisma.cycle.updateMany({
          where: {
            isActive: true,
            NOT: { id }
          },
          data: { isActive: false },
        });
      }

      const cycle = await this.prisma.cycle.update({
        where: { id },
        data: {
          ...(updateCycleDto.name && { name: updateCycleDto.name }),
          ...(updateCycleDto.year && { year: updateCycleDto.year }),
          ...(updateCycleDto.period && { period: updateCycleDto.period }),
          ...(updateCycleDto.startDate && { startDate: new Date(updateCycleDto.startDate) }),
          ...(updateCycleDto.endDate && { endDate: new Date(updateCycleDto.endDate) }),
          ...(updateCycleDto.isActive !== undefined && { isActive: updateCycleDto.isActive }),
        },
      });

      return cycle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe un ciclo para ese año y periodo');
      }
      throw new InternalServerErrorException('Error al actualizar el ciclo');
    }
  }

  async remove(id: number) {
    try {
      // Verificar que el ciclo existe
      await this.findOne(id);

      await this.prisma.cycle.delete({
        where: { id },
      });

      return { message: `Ciclo con ID ${id} eliminado correctamente` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('No se puede eliminar el ciclo porque tiene materias asociadas');
      }
      throw new InternalServerErrorException('Error al eliminar el ciclo');
    }
  }
}
