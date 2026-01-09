import { Module } from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';

@Module({
  controllers: [SpecialityController],
  providers: [SpecialityService, PrismaAcademicService],
})
export class SpecialityModule { }
