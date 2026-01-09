import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaProfilesService } from 'src/prisma/prisma-profiles.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, PrismaProfilesService],
})
export class StudentModule { }
