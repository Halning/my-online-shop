import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll(): ProductEntity[] {
    return this.productRepository.findAll();
  }

  findOne(id: string): ProductEntity | null {
    return this.productRepository.findOne(id);
  }

  create(product: ProductEntity): ProductEntity {
    return this.productRepository.create(product);
  }

  update(id: string, product: ProductEntity): ProductEntity | null {
    return this.productRepository.update(id, product);
  }

  delete(id: string): void {
    this.productRepository.delete(id);
  }
}
