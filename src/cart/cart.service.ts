import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { CartEntity, CartItemEntity } from '../entities/cart.entity';
import { OrderService } from '../order/order.service';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly orderService: OrderService,
  ) {}

  async getCart(
    userId: string,
  ): Promise<{ cart: CartEntity; totalPrice: number }> {
    const cart = this.cartRepository.findOne(userId);
    let totalPrice = 0;
    if (cart) {
      totalPrice = this.calculateTotalPrice(cart);
    }

    if (!cart) {
      return null;
    }

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

  async clearCart(userId: string): Promise<void> {
    this.cartRepository.softDelete(userId);
  }

  async createCart(
    userId: string,
  ): Promise<{ cart: CartEntity; totalPrice: number }> {
    const newCart = { id: userId, userId, isDeleted: false, items: [] };
    const cart = this.cartRepository.save(newCart);
    return { cart, totalPrice: 0 };
  }

  private calculateTotalPrice({ items }: CartEntity): number {
    let result = 0;

    result = items.reduce((acc, item) => {
      acc += item.count * item.product.price;
      return acc;
    }, result);

    return result;
  }

  async checkout(userId: string): Promise<{ order: OrderEntity }> {
    const cart = await this.getCart(userId);
    const order = this.orderService.create(userId, cart);
    const result = {
      order,
    };

    return result;
  }
}
