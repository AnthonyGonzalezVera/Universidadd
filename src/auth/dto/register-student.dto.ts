import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterStudentDto {
    @ApiProperty({
        description: "Name of the student",
        example: "John Doe"
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: "Email of the student",
        example: "john.doe@sudamericano.edu.ec"
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
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    careerId: number;

    @ApiProperty({
        description: "Current cycle in which the student is",
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    currentCicle: number;
}
