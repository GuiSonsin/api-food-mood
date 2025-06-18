import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Request() request) {
    const user = request?.user;
    return this.orderService.create(createOrderDto, user.sub);
  }

  @Get()
  findAllByUserId(@Request() request) {
    const user = request?.user;

    return this.orderService.findAllByUserId(user.sub);
  }

  // @Get()
  // findAll() {
  //   return this.orderService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() request) {
    const user = request?.user;

    return this.orderService.findOne(id, user.sub);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @Request() request,
  ) {
    const user = request?.user;

    return this.orderService.update(id, updateOrderDto, user.sub);
  }
}
