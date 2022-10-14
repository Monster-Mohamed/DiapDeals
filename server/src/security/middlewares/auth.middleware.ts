import { NestMiddleware, Injectable } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { AuthRequest } from "../../types/AuthRequest.type";
import { verify } from "jsonwebtoken";
import { UserService } from "../../app/user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: AuthRequest, _: Response, next: NextFunction) {
    try {
      if (!req.headers["authorization"]) {
        req.user = null;
        next();
        return;
      }

      const token = req.headers["authorization"].split(" ")[1];
      const userDetails: any = verify(token, process.env.JWT_SECRET);

      const user = await this.userService.findById(userDetails.id);

      req.user = user;

      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
