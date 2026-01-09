import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCareerDto {
    @ApiProperty({
        description: "Name of the career",
        example: "software development"
    })
    @IsString()
    name: string;         
    
    @ApiProperty({
        description: "Total of the cicles in the career",
        example: "4"
    })
    @IsNumber()
    totalCicles: number;  
    
    @ApiProperty({
        description: "Total duration of the career",
        example: "6"
    })
    @IsNumber()
    durationYears: number;
}
