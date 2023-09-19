import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { CartItem } from 'src/entities/cart-item.entity';
import { User } from '../entities/user.entity';
// import { CartRepository } from './cart.repository';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(private readonly em: EntityManager) {}

  async updateCart(userId: string, cart: Cart): Promise<{ cart: Cart; totalPrice: number }> {
    await this.em.persistAndFlush(cart);
    const totalPrice = this.calculateTotalPrice(cart);

    return {
      cart,
      totalPrice,
    };
  }

  async createCart(userId: string): Promise<{ cart: Cart; totalPrice: number }> {
    const newCart = new Cart();
    newCart.userId = userId;
    newCart.isDeleted = false;
    newCart.items = [];
    newCart.user = await this.em.findOne(User, { id: userId });
    console.log(newCart);

    await this.em.persistAndFlush(newCart);

    return { cart: newCart, totalPrice: 0 };
  }

  async getCart(userId: string): Promise<Cart | null> {
    return this.em.findOne(Cart, userId);
  }

  async addToCart(userId: string, cartItem: CartItem): Promise<Cart> {
    let cart = await this.em.findOne(Cart, userId);

    if (!cart) {
      cart = new Cart();
      cart.userId = userId;
      cart.isDeleted = false;
      cart.items = [];
    }

    cart.items.push(cartItem);

    await this.em.persistAndFlush(cart);

    return cart;
  }

  async clearCart(userId: string): Promise<void> {
    const cart = await this.em.findOne(Cart, userId);

    if (cart) {
      cart.items = [];
      await this.em.persistAndFlush(cart);
    }
  }

  private calculateTotalPrice(cart: Cart): number {
    let result = 0;

    for (const cartItem of cart.items) {
      result += cartItem.count * cartItem.product.price;
    }

    return result;
  }
}
