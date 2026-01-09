import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SpecialityModule } from './speciality/speciality.module';
import { CareerModule } from './career/career.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';
import { StudentsubjectModule } from './studentsubject/studentsubject.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { PrismaUsersService } from './prisma/prisma-users.service';
import { PrismaAcademicService } from './prisma/prisma-academic.service';
import { PrismaProfilesService } from './prisma/prisma-profiles.service';
import { CycleModule } from './cycle/cycle.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    SpecialityModule,
    CareerModule,
    TeacherModule,
    SubjectModule,
    StudentsubjectModule,
    StudentModule,
    AuthModule,
    CycleModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaUsersService,
    PrismaAcademicService,
    PrismaProfilesService,
  ],
  exports: [
    PrismaUsersService,
    PrismaAcademicService,
    PrismaProfilesService,
  ]
})
export class AppModule { }
