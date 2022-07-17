import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/Accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Token is missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_Id } = verify(
      token,
      "f9bc70dfda4952a9fe76d99ac86618c6"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_Id);

    if (!user) throw new AppError("User does not exist", 401);

    request.user = {
      id: user_Id,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
