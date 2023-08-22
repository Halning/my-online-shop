import { Injectable } from '@nestjs/common';
import { CartEntity } from '../entities/cart.entity';

@Injectable()
export class CartRepository {
  private carts: CartEntity[] = [];

  findOne(userId: string): CartEntity | null {
    return this.carts.find(cart => cart.userId === userId && !cart.isDeleted) || null;
  }

  save(cart: CartEntity): CartEntity {
    const existingCart = this.findOne(cart.userId);
    if (existingCart) {
      Object.assign(existingCart, cart);
    } else {
      this.carts.push(cart);
    }
    return cart;
  }

  softDelete(userId: string): void {
    const cart = this.findOne(userId);
    if (cart) {
      cart.isDeleted = true;
    }
  }
}
