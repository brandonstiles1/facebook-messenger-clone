import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUsers() {
    const allUsers = await this.userRepository.find();

    return allUsers;
  }

  async postUser() {
    return await this.userRepository.save({ name: 'Larry' });
  }
}
