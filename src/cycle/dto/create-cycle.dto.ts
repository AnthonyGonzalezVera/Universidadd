import { IsString, IsInt, IsDateString, IsBoolean, IsOptional, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCycleDto {
    @ApiProperty({ example: '2025-1', description: 'Nombre del ciclo académico' })
    @IsString()
    name: string;

    @ApiProperty({ example: 2025, description: 'Año del ciclo' })
    @IsInt()
    @Min(2020)
    year: number;

    @ApiProperty({ example: 1, description: 'Periodo del ciclo (1 o 2)' })
    @IsInt()
    @Min(1)
    @Max(2)
    period: number;

    @ApiProperty({ example: '2025-01-15T00:00:00Z', description: 'Fecha de inicio del ciclo' })
    @IsDateString()
    startDate: string;

    @ApiProperty({ example: '2025-06-30T00:00:00Z', description: 'Fecha de fin del ciclo' })
    @IsDateString()
    endDate: string;

    @ApiProperty({ example: true, description: 'Si el ciclo está activo', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
