import {
  Entity,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { CartItem } from './cart-item.entity';
import { v4 } from 'uuid';
import { User } from './user.entity';

@Entity()
export class Cart {
  @PrimaryKey({ type: 'uuid' })
  id: string = v4();

  @Property({ fieldName: 'user_id' })
  userId!: string;

  @OneToOne(() => User, (user) => user.cart, { owner: true })
  user!: User;

  @Property({ fieldName: 'is_deleted' })
  isDeleted!: boolean;

  @OneToMany(() => CartItem, (item) => item.cart)
  items = new Array<CartItem>();
}
