import { cart, CartItemEntity } from "./cart.entity";

type ORDER_STATUS = 'created' | 'completed';

export interface OrderEntity {
    id: string, // uuid
    userId: string;
    cartId: string;
    items: CartItemEntity[] // products from CartEntity
    payment: {
        type: string,
        address?: any,
        creditCard?: any,
    },
    delivery: {
        type: string,
        address: any,
    },
    comments: string,
    status: ORDER_STATUS;
    totalPrice: number;
}

export const order: OrderEntity = {
    id: '',
    userId: '',
    cartId: '',
    items: null,
    payment: {
        "type": "paypal",
        "address": "London",
        "creditCard": "1234-1234-1234-1234"
    },
    delivery: {
        "type": "post",
        "address": "London"
    },
    comments: "",
    status: "created",
    totalPrice: 2,
}
