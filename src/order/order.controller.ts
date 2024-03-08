import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrder(): Promise<any> {
    return this.orderService.getOrder();
  }
  @Get(':id')
  async getAll(@Param('id') id: string): Promise<any> {
    return this.orderService.getAll();
  }
  @Post(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.orderService.getOne(id);
  }
}
