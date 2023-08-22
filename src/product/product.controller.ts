import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from '../entities/product.entity';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): ProductEntity[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ProductEntity | null {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: ProductEntity): ProductEntity {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: ProductEntity): ProductEntity | null {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.productService.delete(id);
  }
}
