import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Cart } from './cart.entity';
import { Product } from './product.entity';

@Entity()
export class CartItem {
  @PrimaryKey({ type: 'auto' })
  id!: string; // You can add an ID property if needed

  @Property()
  count!: number;

  @ManyToOne(() => Product)
  product!: Product;

  // @ts-ignore
  @ManyToOne(() => Cart, (cart) => cart.items)
  cart!: Cart; // This property references the owning Cart entity
}
