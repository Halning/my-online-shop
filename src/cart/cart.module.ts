import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { UserRepository } from '../user/user.repository';
import { JoiPipeModule } from 'nestjs-joi';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [JoiPipeModule, OrderModule],
  providers: [CartService, CartRepository, UserRepository],
  controllers: [CartController],
})
export class CartModule {}
