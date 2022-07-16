import { hash } from "bcrypt";
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
    password,
    drivers_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.UsersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User Already Exists");

    const passwordHash = await hash(password, 8);

    await this.UsersRepository.create({
      name,
      email,
      password: passwordHash,
      drivers_license,
    });
  }
}
