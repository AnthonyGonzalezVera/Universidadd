import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterTeacherDto {
    @ApiProperty({
        description: "Name of the teacher",
        example: "Dr. Jane Smith"
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: "Email of the teacher",
        example: "jane.smith@sudamericano.edu.ec"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: "Password for the account",
        example: "SecurePass123",
        minLength: 6
    })
    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

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
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    specialityId: number;

    @ApiProperty({
        description: "ID of the career",
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    careerId: number;
}
