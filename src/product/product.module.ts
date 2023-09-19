import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Product } from '../entities/product.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Product] })],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
