import { Injectable } from '@nestjs/common';
import { order, OrderEntity } from '../entities/order.entity';
import { OrderRepository } from './order.repository';
import { CartEntity } from '../entities/cart.entity';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  findOne(id: string): OrderEntity | null {
    return this.orderRepository.findOne(id);
  }

  create(
    userId: string,
    cart: { cart: CartEntity; totalPrice: number },
  ): OrderEntity {
    const newOrder = { ...order, ...cart.cart, totalPrice: cart.totalPrice };
    return this.orderRepository.create(newOrder);
  }
}
