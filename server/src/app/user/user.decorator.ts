import { UserString } from "@app/types/user/UserString.type";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthRequest } from "../../types/AuthRequest.type";

export const User = createParamDecorator(
  (data: UserString, ctx: ExecutionContext) => {
    const req: AuthRequest = ctx.switchToHttp().getRequest();

    if (!req.user) {
      return null;
    }

    if (data) {
      return req.user[data];
    }

    return req.user;
  }
);
