import { Injectable } from '@nestjs/common';
import { CartEntity } from '../entities/cart.entity';

@Injectable()
export class CartRepository {
  private carts: CartEntity[] = [];

  findOne(userId: string): CartEntity | null {
    console.log(this.carts);
    return (
      this.carts.find((cart) => cart.userId === userId && !cart.isDeleted) ||
      null
    );
  }

  save(cart: CartEntity): CartEntity {
    const existingCart = this.findOne(cart.id);
    if (existingCart) {
      this.carts = this.carts.map((item) => {
        if (item.userId === existingCart.userId) {
          const newItems = existingCart.items.map((product) => {
            if (
              cart.items.some(
                (value) => value.product.id === product.product.id,
              )
            ) {
              return cart.items;
            }

            return product;
          });
          return { items: newItems, ...existingCart, ...cart };
        }
        return item;
      });
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
