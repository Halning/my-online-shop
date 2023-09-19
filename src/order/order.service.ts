import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
// import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly em: EntityManager) {}

  async findAll(userId: string): Promise<Order[]> {
    return this.em.find(Order, { userId });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.em.findOne(Order, id);
  }

  async create(order: Order): Promise<Order> {
    await this.em.persistAndFlush(order);
    return order;
  }

  async delete(id: string): Promise<void> {
    const order = await this.em.findOne(Order, id);
    if (order) {
      await this.em.removeAndFlush(order);
    }
  }
}
