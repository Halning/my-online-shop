import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { UserRepository } from '../user/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductEntity, ProductModel } from '../entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductEntity.name, schema: ProductModel },
    ]),
  ],
  providers: [ProductService, ProductRepository, UserRepository],
  controllers: [ProductController],
})
export class ProductModule {}
