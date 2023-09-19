import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { UserRepository } from '../user/user.repository';

@Module({
  providers: [ProductService, ProductRepository, UserRepository],
  controllers: [ProductController],
})
export class ProductModule {}
