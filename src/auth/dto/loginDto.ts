import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
	@ApiProperty({
		description: "The institutional email of the user",
		example: "john.doe@sudamericano.edu.ec",
	})
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@ApiProperty({
		description: "The password for the user account",
		example: "StrongP@ssw0rd",
		minLength: 6,
	})
	@IsString()
	@MinLength(6)
	@IsNotEmpty()
	password: string;
}
