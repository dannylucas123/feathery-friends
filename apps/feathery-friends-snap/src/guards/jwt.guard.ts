import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Checks if the controller/specific handler has the NoAuth() decorator
    const noAuthRequired = this.reflector.getAllAndOverride<boolean>('NoAuth', [
      context.getHandler(), // Route
      context.getClass(), // Controller
    ]);

    if (noAuthRequired) return true;

    const request = context.switchToHttp().getRequest();

    try {
      const token = this.extractTokenFromHeader(request);
      const claims = await this.jwtService.verifyAsync(token);

      request.claims = claims;
    } catch (err) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string {
    const header = request.headers.authorization;
    if (!header.startsWith('Bearer ')) {
      throw new Error('No Bearer token found.');
    }
    return header.substring(7, header.length);
  }
}
