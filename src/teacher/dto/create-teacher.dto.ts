import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTeacherDto {
    @ApiProperty({
        description: "Name of the teacher",
        example: "John Doe"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Email of the teacher",
        example: "john.doe@example.com"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "Phone number of the teacher",
        example: "1234567890",
        required: false
    })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({
        description: "Age of the teacher",
        example: 35,
        required: false
    })
    @IsNumber()
    @IsOptional()
    age?: number;

    @ApiProperty({
        description: "ID of the speciality of the teacher",
        example: 1
    })
    @IsNumber()
    specialityId: number;

    @ApiProperty({
        description: "ID of the career the teacher belongs to",
        example: 1
    })
    @IsNumber()
    careerId: number;
}
