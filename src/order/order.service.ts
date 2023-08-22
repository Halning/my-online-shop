import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  findAll(userId: string): OrderEntity[] {
    return this.orderRepository.findAll(userId);
  }

  findOne(id: string): OrderEntity | null {
    return this.orderRepository.findOne(id);
  }

  create(order: OrderEntity): OrderEntity {
    // Additional business logic related to creating an order can go here.
    return this.orderRepository.create(order);
  }

  delete(id: string): void {
    this.orderRepository.delete(id);
  }
}
