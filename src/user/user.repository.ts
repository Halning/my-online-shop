import { Injectable } from '@nestjs/common';
import {user, UserEntity} from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [
    user
  ];

  findOne(id: string): UserEntity | null {
    return this.users.find(user => user.id === id) || null;
  }
}
