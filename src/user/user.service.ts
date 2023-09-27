import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { RegisterDto } from '../dto/registr.dto';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async create(userDto: RegisterDto): Promise<User> {
    const user = new User(userDto.email, userDto.password, userDto.role);
    await this.em.persistAndFlush(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.em.findOne(User, { email });
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.em.findOne(User, { id });
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && user.verifyPassword(password)) {
      return user;
    }
    return null;
  }
}
