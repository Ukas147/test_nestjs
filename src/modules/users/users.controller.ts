import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from 'generated/prisma';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id: number) {
    return this.usersService.findUserById(+id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(+id);
  }
}
