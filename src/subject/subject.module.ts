import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { PrismaAcademicService } from 'src/prisma/prisma-academic.service';

@Module({
  controllers: [SubjectController],
  providers: [SubjectService, PrismaAcademicService],
})
export class SubjectModule { }
