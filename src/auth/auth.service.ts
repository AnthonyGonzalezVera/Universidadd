import {
	Injectable,
	BadRequestException,
	UnauthorizedException,
	InternalServerErrorException,
	ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { LoginDto } from "./dto/loginDto";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { RefreshDto } from "./dto/refreshDto";
import { ConfigService } from "@nestjs/config";
import { PrismaUsersService } from "src/prisma/prisma-users.service";
import { PrismaProfilesService } from "src/prisma/prisma-profiles.service";
import { RegisterStudentDto } from "./dto/register-student.dto";
import { RegisterTeacherDto } from "./dto/register-teacher.dto";

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaUsersService,
		private readonly prismaProfiles: PrismaProfilesService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) { }

	async registerStudent(registerStudentDto: RegisterStudentDto) {
		try {
			const existingUser = await this.prisma.user.findUnique({
				where: { email: registerStudentDto.email },
			});

			if (existingUser) {
				throw new ConflictException("Email already registered");
			}

			const hashedPassword = bcrypt.hashSync(registerStudentDto.password, 10);

			const user = await this.prisma.user.create({
				data: {
					name: registerStudentDto.name,
					email: registerStudentDto.email,
					password: hashedPassword,
					phone: registerStudentDto.phone,
					age: registerStudentDto.age,
					roleId: 3, // 3 = STUDENT
				}
			});

			// Create UserReference and StudentProfile in profiles DB
			await this.prismaProfiles.userReference.create({
				data: {
					id: user.id,
					name: user.name,
					email: user.email,
					roleId: user.roleId,
					status: user.status,
					studentProfile: {
						create: {
							careerId: registerStudentDto.careerId,
							currentCicle: registerStudentDto.currentCicle,
						}
					}
				}
			});

			// Remove password from response
			const { password, ...userWithoutPassword } = user;
			return userWithoutPassword;
		} catch (error) {
			this.handleDBErrors(error);
		}
	}

	async registerTeacher(registerTeacherDto: RegisterTeacherDto) {
		try {
			const existingUser = await this.prisma.user.findUnique({
				where: { email: registerTeacherDto.email },
			});

			if (existingUser) {
				throw new ConflictException("Email already registered");
			}

			const hashedPassword = bcrypt.hashSync(registerTeacherDto.password, 10);

			const user = await this.prisma.user.create({
				data: {
					name: registerTeacherDto.name,
					email: registerTeacherDto.email,
					password: hashedPassword,
					phone: registerTeacherDto.phone,
					age: registerTeacherDto.age,
					roleId: 2, // 2 = TEACHER
				}
			});

			// Create UserReference and TeacherProfile in profiles DB
			await this.prismaProfiles.userReference.create({
				data: {
					id: user.id,
					name: user.name,
					email: user.email,
					roleId: user.roleId,
					status: user.status,
					teacherProfile: {
						create: {
							specialityId: registerTeacherDto.specialityId,
							careerId: registerTeacherDto.careerId,
						}
					}
				}
			});

			// Remove password from response
			const { password, ...userWithoutPassword } = user;
			return userWithoutPassword;
		} catch (error) {
			this.handleDBErrors(error);
		}
	}

	async login(loginDto: LoginDto) {
		const { password, email } = loginDto;

		const user = await this.prisma.user.findUnique({
			where: { email },
			include: {
				role: true
			}
		});
		if (!user) throw new UnauthorizedException("Credentials are not valid");
		if (!bcrypt.compareSync(password, user.password))
			throw new UnauthorizedException("Credentials are not valid");

		const roleName = user.role.name;

		const accessToken = this.getJwtToken(
			{ id: user.id, role: roleName },
			{ expiresIn: "2d" },
		);
		const refreshToken = this.getJwtToken({ id: user.id }, { expiresIn: "7d" });

		return {
			userId: user.id,
			roleName,
			accessToken,
			refreshToken,
		};
	}

	private getJwtToken(payload: JwtPayload, options?: { expiresIn: string }) {
		const signOptions = {
			secret: this.configService.get<string>("JWT_SECRET"),
			expiresIn: options?.expiresIn || "2d",
		};
		const token = this.jwtService.sign(payload, signOptions as any);
		return token;
	}

	async refreshToken(refreshDto: RefreshDto) {
		try {
			const payload = this.jwtService.verify(refreshDto.refreshToken, {
				secret: this.configService.get<string>("JWT_SECRET"),
			});
			const user = await this.prisma.user.findUnique({
				where: { id: payload.id },
				select: { email: true, password: true, id: true },
			});

			if (!user) throw new UnauthorizedException("Invalid refresh token");
			const accessToken = this.getJwtToken(
				{ id: user.id },
				{ expiresIn: "2d" },
			);
			const refreshToken = this.getJwtToken(
				{ id: user.id },
				{ expiresIn: "7d" },
			);

			return {
				...user,
				accessToken,
				refreshToken,
			};
		} catch (error) {
			throw error;
		}
	}
	private handleDBErrors(error): never {
		if (error.code === "23505") throw new BadRequestException(error.detail);

		console.log(error);

		throw new InternalServerErrorException("Please check server logs");
	}
}