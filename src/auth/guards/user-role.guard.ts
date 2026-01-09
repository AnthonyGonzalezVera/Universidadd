import { Reflector } from "@nestjs/core";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Injectable, ForbiddenException } from "@nestjs/common";
import { META_ROLES } from "../decorators/role-protected.decorator";

@Injectable()
export class UserRoleGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const user = req.user;

		const roles = this.reflector.get<string[]>(
			META_ROLES,
			context.getHandler(),
		);

		// Si no hay roles definidos, cualquier usuario autenticado puede acceder
		if (!roles || roles.length === 0) return true;

		// Si hay roles definidos, verificar que el usuario tenga uno de ellos
		if (!user || !user.role) {
			throw new ForbiddenException("User role not found");
		}

		const hasRole = roles.includes(user.role);

		if (!hasRole) {
			throw new ForbiddenException("User does not have the required role");
		}

		return true;
	}
}
