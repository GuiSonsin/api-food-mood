import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const address = await this.prisma.address.create({
      data: createAddressDto,
    });
    return address;
  }

  async findAll() {
    const addresses = await this.prisma.address.findMany();
    return addresses;
  }

  async findOne(id: string) {
    const address = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });
    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const updatedAddress = await this.prisma.address.update({
      data: updateAddressDto,
      where: {
        id,
      },
    });
    return updatedAddress;
  }

  async remove(id: string) {
    await this.prisma.address.delete({
      where: {
        id,
      },
    });
    return 'Endereço removido com sucesso!';
  }
}
