import { Module } from '@nestjs/common';
import { StudentsubjectService } from './studentsubject.service';
import { StudentsubjectController } from './studentsubject.controller';
import { PrismaProfilesService } from 'src/prisma/prisma-profiles.service';
import { SubjectModule } from 'src/subject/subject.module';

@Module({
  controllers: [StudentsubjectController],
  providers: [StudentsubjectService, PrismaProfilesService],
  imports: [SubjectModule]
})
export class StudentsubjectModule { }
