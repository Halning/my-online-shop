import { Module } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { CartModule } from '../cart/cart.module';

@Module({
  providers: [OrderRepository, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
