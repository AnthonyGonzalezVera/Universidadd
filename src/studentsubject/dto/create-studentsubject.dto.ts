import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateStudentsubjectDto {
    @ApiProperty({
        description: "ID of the student profile",
        example: 1
    })
    @IsNumber()
    studentProfileId: number;

    @ApiProperty({
        description: "ID of the subject",
        example: 1
    })
    @IsNumber()
    subjectId: number;

    @ApiProperty({
        description: "Grade for the subject",
        example: 95.5,
        required: false
    })
    @IsNumber()
    @IsOptional()
    grade?: number;
}
