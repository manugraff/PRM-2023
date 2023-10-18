import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
  import { TopicService } from 'src/services/topic.services';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly topicService: TopicService) {}
  
    @Get()
    findAll() {
      return this.topicService.findAll();
    }
  
    @Get(':id')
    async findOneById(@Param('id') id: number) {
      return await this.topicService.findOneById(id);
    }
  
    @Post()
    async create(@Body() userData: any) {
      return await this.topicService.create(userData);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() userData: any) {
      return await this.topicService.update(id, userData);
    }
  
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.topicService.deleteUser(id);
      return { message: 'Usuário excluído com sucesso.' };
    }
  }
  