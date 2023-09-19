import { Controller, Get, Post, Delete, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(@Req() req: Request): Promise<Order[]> {
    // Assuming the authentication middleware has attached the user object to the request
    const userId = req['user'].id;
    return await this.orderService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order | null> {
    return await this.orderService.findOne(id);
  }

  @Post()
  async create(@Body() order: Order, @Req() req: Request): Promise<Order> {
    // Again, assuming the user object is attached to the request by the authentication middleware
    order.userId = req['user'].id;
    return await this.orderService.create(order);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.orderService.delete(id);
  }
}
