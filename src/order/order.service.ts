import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Cart } from '../entities/cart.entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly em: EntityManager) {}

  async findAll(userId: string): Promise<Order[]> {
    return this.em.find(Order, { userId });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.em.findOne(Order, id);
  }

  async create(
    userId: string,
    cart: any,
  ): Promise<Order> {
    const order = this.findOne(userId);
    const newOrder = { ...order, ...cart.cart, totalPrice: cart.totalPrice };
    await this.em.persistAndFlush(newOrder);
    return newOrder;
  }

  async delete(id: string): Promise<void> {
    const order = await this.em.findOne(Order, id);
    if (order) {
      await this.em.removeAndFlush(order);
    }
  }
}
