import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from 'src/entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Topic)
    private readonly userRepository: Repository<Topic>,
  ) {}

  async findAll(): Promise<Topic[]> {
    return await this.userRepository.find();
  }

  async findOneById(id: number): Promise<Topic | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(user: Topic): Promise<Topic> {
    return await this.userRepository.save(user);
  }

  async update(id: number, updatedUser: Topic): Promise<Topic | undefined> {
    await this.userRepository.update(id, updatedUser);
    return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Usuário com o ID ${id} não encontrado.`);
    }

    await this.userRepository.remove(user);
  }
}
