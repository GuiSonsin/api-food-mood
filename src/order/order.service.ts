import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto, userId: string) {
    const order = await this.prisma.order.create({
      data: {
        ...createOrderDto,
        userId,
      },
    });
    return order;
  }

  async findAllByUserId(userId: string) {
    const orders = await this.prisma.order.findMany({
      where: {
        id: userId,
      },
    });
    return orders;
  }

  async findAll() {
    const orders = await this.prisma.order.findMany();
    return orders;
  }

  async findOne(id: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
        userId,
      },
    });
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto, userId: string) {
    const updatedOrder = await this.prisma.order.update({
      data: {
        ...updateOrderDto,
        userId,
      },
      where: {
        id,
      },
    });
    return updatedOrder;
  }
}
