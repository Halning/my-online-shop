import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Order } from '../entities/order.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Order] })],
  providers: [OrderService],
  controllers: [OrderController],
    exports: [OrderService],
})
export class OrderModule {}
