import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Cart } from './cart.entity';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;

  @Property()
  name!: string;
}
