import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../entities/user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User] })],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
