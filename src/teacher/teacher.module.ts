import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { PrismaProfilesService } from 'src/prisma/prisma-profiles.service';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService, PrismaProfilesService],
})
export class TeacherModule { }
