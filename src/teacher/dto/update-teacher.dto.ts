import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateTeacherDto {
    @ApiProperty({
        description: "Name of the teacher",
        example: "Dr. Jane Smith",
        required: false
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: "Email of the teacher",
        example: "jane.smith@sudamericano.edu.ec",
        required: false
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: "Age of the teacher",
        example: 35,
        required: false
    })
    @IsNumber()
    @IsOptional()
    age?: number;

    @ApiProperty({
        description: "Phone number of the teacher",
        example: "0987654321",
        required: false
    })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({
        description: "ID of the speciality",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    specialityId?: number;

    @ApiProperty({
        description: "ID of the career",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    careerId?: number;
}

