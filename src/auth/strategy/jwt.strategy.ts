import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { PrismaUsersService } from "src/prisma/prisma-users.service";
import { User } from "@prisma/client-users";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private prisma: PrismaUsersService,
		configService: ConfigService,
	) {
		const secret = configService.get<string>("JWT_SECRET");
		if (!secret) {
			throw new Error('JWT_SECRET is not defined in environment variables');
		}

		super({
			secretOrKey: secret, // ✅ CAMBIO: Ahora TypeScript sabe que no es undefined
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		});
	}

	async validate(payload: JwtPayload): Promise<User> {
		const { id } = payload;

		const user = await this.prisma.user.findUnique({
			where: { id: id },
			include: { role: true }
		});

		if (!user) throw new UnauthorizedException("Token not valid");

		return user;
	}
}