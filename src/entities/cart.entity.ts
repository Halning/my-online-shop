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

// export interface CartItemEntity {
//     product: Product;
//     count: number;
// }
//
// export interface CartEntity {
//     id: string; // uuid
//     userId: string;
//     isDeleted: boolean;
//     items: CartItemEntity[];
// }
//
// const cartItem: CartItemEntity = {
//     product: null,
//     count: 2,
// }
//
// export const cart: CartEntity = {
//     id: '1434fec6-cd85-420d-95c0-eee2301a971d',
//     userId: '0fe36d16-49bc-4aab-a227-f84df899a6cb',
//     isDeleted: false,
//     items: [cartItem],
// }
