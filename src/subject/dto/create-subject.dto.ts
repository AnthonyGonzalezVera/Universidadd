import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSubjectDto {
    @ApiProperty({
        description: "Name of the subject",
        example: "Mathematics"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "ID of the career this subject belongs to",
        example: 1
    })
    @IsNumber()
    careerId: number;

    @ApiProperty({
        description: "Cycle number in which this subject is taught",
        example: 1
    })
    @IsNumber()
    cicleNumber: number;

    @ApiProperty({
        description: "ID of the teacher for this subject",
        example: 1,
        required: false
    })
    @IsNumber()
    @IsOptional()
    teacherId?: number;
}
