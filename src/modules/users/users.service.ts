import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAllUsers() {
    return this.usersRepository.findAllUsers();
  }

  async findUserById(id: number) {
    return this.usersRepository.findUserById(id);
  }

  async createUser(user: User) {
    return this.usersRepository.createUser(user);
  }

  async deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
