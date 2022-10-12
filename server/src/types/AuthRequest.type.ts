import { Request } from "express";
import { UserEntity } from "../database/entities/user.entity";

export interface AuthRequest extends Request {
  user?: UserEntity;
}
