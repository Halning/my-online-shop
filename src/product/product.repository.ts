import { Injectable } from '@nestjs/common';
import { product, ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [product];

  findAll(): ProductEntity[] {
    return this.products;
  }

  findOne(id: string): ProductEntity | null {
    return this.products.find((product) => product.id === id) || null;
  }
}
