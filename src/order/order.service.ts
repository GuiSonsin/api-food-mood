import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto, userId: string) {
    const { productList, ...rest } = createOrderDto;

    const order = await this.prisma.order.create({
      data: {
        ...rest,
        userId,
        ProductsList: {
          createMany: {
            data: productList,
          },
        },
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

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
      },
    });
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const updatedOrder = await this.prisma.order.update({
      data: {
        ...updateOrderDto,
      },
      where: {
        id,
      },
    });
    return updatedOrder;
  }
}
