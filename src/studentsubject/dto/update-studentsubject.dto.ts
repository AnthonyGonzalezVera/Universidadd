import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class UpdateStudentsubjectDto {
    @ApiProperty({
        description: "ID of the student profile",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    studentProfileId?: number;

    @ApiProperty({
        description: "ID of the subject",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    subjectId?: number;

    @ApiProperty({
        description: "Grade for the subject",
        example: 95.5,
        required: false
    })
    @IsNumber()
    @IsOptional()
    grade?: number;

    @ApiProperty({
        description: "Status of enrollment",
        example: "enrolled",
        required: false
    })
    @IsOptional()
    status?: string;
}
