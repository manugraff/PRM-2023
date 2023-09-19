import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return await this.usersService.findOneById(id);
  }

  @Post()
  async create(@Body() userData: any) {
    return await this.usersService.create(userData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userData: any) {
    return await this.usersService.update(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.deleteUser(id);
    return { message: 'Usuário excluído com sucesso.' };
  }
}
