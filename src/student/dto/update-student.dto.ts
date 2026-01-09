import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
    @ApiProperty({
        description: "Name of the student",
        example: "John Doe",
        required: false
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: "Email of the student",
        example: "john.doe@sudamericano.edu.ec",
        required: false
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: "Age of the student",
        example: 20,
        required: false
    })
    @IsNumber()
    @IsOptional()
    age?: number;

    @ApiProperty({
        description: "Phone number of the student",
        example: "0987654321",
        required: false
    })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({
        description: "ID of the career",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    careerId?: number;

    @ApiProperty({
        description: "Current cycle in which the student is",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    currentCicle?: number;

    @ApiProperty({
        description: "Status of the student",
        example: "active",
        required: false
    })
    @IsString()
    @IsOptional()
    status?: string;
}

