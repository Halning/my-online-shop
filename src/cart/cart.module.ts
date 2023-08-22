import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { UserRepository } from '../user/user.repository';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports: [JoiPipeModule],
  providers: [CartService, CartRepository, UserRepository],
  controllers: [CartController],
})
export class CartModule {}
