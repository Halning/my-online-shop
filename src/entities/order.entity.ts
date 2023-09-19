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

// export interface OrderEntity {
//     id: string, // uuid
//     userId: string;
//     cartId: string;
//     items: CartItemEntity[] // products from CartEntity
//     payment: {
//         type: string,
//         address?: any,
//         creditCard?: any,
//     },
//     delivery: {
//         type: string,
//         address: any,
//     },
//     comments: string,
//     status: ORDER_STATUS;
//     total: number;
// }
//
// const order: OrderEntity = {
//     id: 'dffd6fa8-be6b-47f6-acff-455612620ac2',
//     userId: '0fe36d16-49bc-4aab-a227-f84df899a6cb',
//     cartId: '',
//     items: cart.items,
//     payment: {
//         type: 'paypal',
//         address: undefined,
//         creditCard: undefined
//     },
//     delivery: {
//         type: 'post',
//         address: undefined
//     },
//     comments: '',
//     status: 'created',
//     total: 2,
// }
