import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  findById(id: string): Promise<User | undefined> {
    return this.repository.findOne({ id });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }

  async create({
    name,
    password,
    email,
    drivers_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      drivers_license,
    });

    await this.repository.save(user);
  }
}
