import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Cart } from './cart.entity';

@Entity()
export class User {
  @PrimaryKey({ type: 'uuid' })
  id?: string = v4();

  @Property()
  name!: string;

  @OneToOne(() => Cart, (cart) => cart.user)
  cart?: Cart;
}
