import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepository {
  private orders: OrderEntity[] = [];

  findAll(userId: string): OrderEntity[] {
    return this.orders.filter(order => order.userId === userId);
  }

  findOne(id: string): OrderEntity | null {
    return this.orders.find(order => order.id === id) || null;
  }

  create(order: OrderEntity): OrderEntity {
    this.orders.push(order);
    return order;
  }

  delete(id: string): void {
    const index = this.orders.findIndex(order => order.id === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }
}
