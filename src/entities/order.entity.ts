import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { CartItem } from "./cart-item.entity";
import {Cart } from "./cart.entity";
import { User } from "./user.entity";

type ORDER_STATUS = 'created' | 'completed';

@Entity()
export class Order {
    @PrimaryKey({ type: 'auto' })
    id!: string;

    @Property()
    userId!: string;

    @ManyToOne(() => User)
    user!: User;

    @Property()
    cartId!: string;

    @ManyToOne(() => Cart)
    cart!: Cart;

    @Property({ type: 'json' })
    items: CartItem[] = [];

    @Property({ type: 'json' })
    payment: {
        type: string;
        address?: any;
        creditCard?: any;
    } = { type: '', address: {}, creditCard: {} };

    @Property({ type: 'json' })
    delivery: {
        type: string;
        address: any;
    } = { type: '', address: {} };

    @Property()
    comments!: string;

    @Property({ type: 'enum' })
    status!: ORDER_STATUS;

    @Property()
    total!: number;
}
