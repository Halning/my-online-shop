import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepository {
  private orders: OrderEntity[] = [];

  findOne(id: string): OrderEntity | null {
    return this.orders.find((order) => order.id === id) || null;
  }

  create(order: OrderEntity): OrderEntity {
    this.orders.push(order);
    return order;
  }
}
