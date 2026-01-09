import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserRoleGuard } from "./guards/user-role.guard";

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy, UserRoleGuard],
	imports: [
		ConfigModule,
		PrismaModule,
		PassportModule.register({ defaultStrategy: "jwt" }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				return {
					secret: configService.get("JWT_SECRET"),
					signOptions: {
						expiresIn: "2d",
					},
				};
			},
		}),
	],
	exports: [JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
