import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStudentDto {
    @ApiProperty({
        description: "Name of the student",
        example: "John Doe"
    })
    @IsString()
    name:           string;

    @ApiProperty({
        description:"Age of the student",
        example:"18"
    })
    @IsOptional()
    @IsNumber()
    age?:           number;    

    @ApiProperty({
        description:"Email of the student",
        example:"johndoe@example.com"
    })
    @IsEmail()
    email:          string;   

    password: string

    @ApiProperty({
        description:"Id of a career",
        example:"1"
    })
    @IsNumber()
    careerId:       number;

    @ApiProperty({
        description:"Current cycle in which the student is",
        example:"3"
    })
    @IsNumber()
    currentCicle:   number;

    @ApiProperty({
        description:"Phome number of the student",
        example:"0987654321"
    })
    @IsOptional()
    @IsString()
    phone?:         string;  

    @ApiProperty({
        description:"Status of the student in the career",
        examples:{
            active:"active",
            graduated:"graduated",
            suspended:"suspended",
            withdrawn:"withdrawn"
        }
    })
    @IsString()
    status:         string;    // active, graduated, suspended, withdrawn
}
