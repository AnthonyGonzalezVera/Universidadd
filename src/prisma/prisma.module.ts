import { Module } from '@nestjs/common';
import { PrismaUsersService } from './prisma-users.service';
import { PrismaProfilesService } from './prisma-profiles.service';
import { PrismaAcademicService } from './prisma-academic.service';

@Module({
  providers: [PrismaUsersService, PrismaProfilesService, PrismaAcademicService], // Declara el servicio como un proveedor dentro de este módulo
  exports: [PrismaUsersService, PrismaProfilesService, PrismaAcademicService],   // Exporta el servicio para que otros módulos puedan usarlo.
})
export class PrismaModule { }