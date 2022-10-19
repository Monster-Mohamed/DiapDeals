import { AuthRequest } from '@app/types/AuthRequest.type';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<AuthRequest>();
    if (req.user.rules === 1) return true;
    throw new HttpException('You are not allowed.', HttpStatus.FORBIDDEN);
  }
}
