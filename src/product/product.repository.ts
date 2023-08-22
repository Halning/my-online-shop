import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  findAll(): ProductEntity[] {
    return this.products;
  }

  findOne(id: string): ProductEntity | null {
    return this.products.find(product => product.id === id) || null;
  }

  create(product: ProductEntity): ProductEntity {
    this.products.push(product);
    return product;
  }

  update(id: string, product: ProductEntity): ProductEntity | null {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = product;
      return product;
    }
    return null;
  }

  delete(id: string): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
