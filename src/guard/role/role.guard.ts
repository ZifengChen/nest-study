import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private Reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.Reflector.get<string[]>('role', context.getHandler());
    const req = context.switchToHttp().getRequest<Request>();
    console.log('经过了守卫', req.query.role);
    if (admin?.includes(req.query.role as string)) {
      return true;
    }
    return false;
  }
}
