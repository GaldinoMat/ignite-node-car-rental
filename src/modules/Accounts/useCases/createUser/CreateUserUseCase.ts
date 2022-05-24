import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UsersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    username,
    password,
    drivers_license,
  }: ICreateUserDTO): Promise<void> {
    await this.UsersRepository.create({
      name,
      email,
      username,
      password,
      drivers_license,
    });
  }
}
