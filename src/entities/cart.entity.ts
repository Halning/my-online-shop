import {Cascade, Entity, ManyToOne, OneToMany, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { CartItem } from "./cart-item.entity";
import { Product } from "./product.entity";
import { User } from "./user.entity";
import { v4 } from 'uuid';

@Entity()
export class Cart {
    @PrimaryKey({ type: 'uuid' })
    id: string = v4();

    @Property({ fieldName: 'user_id' })
    userId!: string;

    @Property({ fieldName: 'is_deleted' })
    isDeleted!: boolean;

    @OneToOne(() => User)
    user!: User; // One-to-one relationship with User

    @OneToMany(() => CartItem, (item) => item.cart, { cascade: [Cascade.ALL] })
    items: CartItem[] = [];
}