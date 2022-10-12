import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { AuthRequest } from "../../types/AuthRequest.type";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<AuthRequest>();
    if (req.user) return true;
    throw new HttpException("Not Authorized", HttpStatus.UNAUTHORIZED);
  }
}
