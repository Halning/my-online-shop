import { Controller, Get, Post, Delete, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { OrderEntity } from '../entities/order.entity';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(@Req() req: Request): OrderEntity[] {
    // Assuming the authentication middleware has attached the user object to the request
    const userId = req['user'].id;
    return this.orderService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): OrderEntity | null {
    return this.orderService.findOne(id);
  }

  @Post()
  create(@Body() order: OrderEntity, @Req() req: Request): OrderEntity {
    // Again, assuming the user object is attached to the request by the authentication middleware
    order.userId = req['user'].id;
    return this.orderService.create(order);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.orderService.delete(id);
  }
}
