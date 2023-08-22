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
}
