import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';

@Module({
  controllers: [CareerController],
  providers: [CareerService, PrismaAcademicService],
})
export class CareerModule { }
