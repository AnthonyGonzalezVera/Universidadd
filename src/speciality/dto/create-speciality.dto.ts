import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSpecialityDto {
    @ApiProperty({
        description: "Name of the speciality",
        example: "Especializacion en desarrollo con react"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Description of the speciality",
        example: "Uso de html, css, typescript"
    })
    @IsString()
    description: string;
}
