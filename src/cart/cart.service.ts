import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { CartEntity, CartItemEntity } from '../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  async getCart(
    userId: string,
  ): Promise<{ cart: CartEntity; totalPrice: number }> {
    console.log(userId);
    const cart = this.cartRepository.findOne(userId);
    const totalPrice = this.calculateTotalPrice(cart);

    const result = {
      cart,
      totalPrice,
    };

    return result;
  }

  async updateCart(
    userId: string,
    cart: CartEntity,
  ): Promise<{ cart: CartEntity; totalPrice: number }> {
    const updatedCart = this.cartRepository.save(cart);
    const totalPrice = this.calculateTotalPrice(updatedCart);

    const result = {
      cart: updatedCart,
      totalPrice,
    };

    return result;
  }

  async createCart(
    userId: string,
  ): Promise<{ cart: CartEntity; totalPrice: number }> {
    const newCart = { id: userId, userId, isDeleted: false, items: [] };
    const cart = this.cartRepository.save(newCart);
    return { cart, totalPrice: 0 };
  }

  findCart(userId: string): CartEntity | null {
    return this.cartRepository.findOne(userId);
  }

  addToCart(userId: string, cartItem: CartItemEntity): CartEntity {
    let cart = this.cartRepository.findOne(userId);
    if (!cart) {
      cart = { id: userId, userId, isDeleted: false, items: [] };
    }
    cart.items.push(cartItem);
    return this.cartRepository.save(cart);
  }

  clearCart(userId: string): void {
    this.cartRepository.softDelete(userId);
  }

  private calculateTotalPrice({ items }: CartEntity): number {
    let result = 0;

    result = items.reduce((acc, item) => {
      acc += item.count * item.product.price;
      return acc;
    }, result);

    return result;
  }
}
