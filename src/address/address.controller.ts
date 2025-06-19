import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('/user/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Request() request, @Body() createAddressDto: CreateAddressDto) {
    const user = request?.user;
    return this.addressService.create(createAddressDto, user.sub);
  }

  @Get()
  findAll(@Request() request) {
    const user = request?.user;
    return this.addressService.findAllByUserId(user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(id);
  }
}
