import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {
    @PrimaryKey({ type: 'auto' })
    id?: string;

    @Property()
    title!: string;

    @Property()
    description!: string;

    @Property()
    price!: number;
}

// export interface ProductEntity {
//     id: string; // uuid
//     title: string;
//     description: string;
//     price: number;
// }
//
// export const product: ProductEntity = {
//     id: '51422fcd-0366-4186-ad5b-c23059b6f64f',
//     title: 'Book',
//     description: 'A very interesting book',
//     price: 100
// }