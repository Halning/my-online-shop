import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from '../entities/product.entity';
import { AuthenticationGuard } from '../auth/auth.guard';
import { Product } from '../entities/product.entity';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseGuards(AuthenticationGuard)
  async getProductList(@Res() res) {
    try {
      const data = await this.productService.findAll();
      res.status(HttpStatus.OK).json({ data, error: null });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        data: null,
        error: {
          message: 'Ooops, something went wrong',
        },
      });
    }
  }

  @Get(':id')
  @UseGuards(AuthenticationGuard)
  async getProductById(@Param('id') id: string, @Res() res): ProductEntity | null {
    try {
      const data = await this.productService.findOne(id);

      if (!data) {
        res.status(HttpStatus.NOT_FOUND).json({
          data: null,
          error: {
            message: 'No product with such id',
          },
        });
        return;
      }

      res.status(HttpStatus.OK).json({ data, error: null });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        data: null,
        error: {
          message: 'Ooops, something went wrong',
        },
      });
    }
  }
}
