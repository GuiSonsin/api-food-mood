import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/all')
  createAll() {
    return this.productService.createAll();
  }

  @Get()
  findAll() {
    const products = this.productService.findAll();
    return products;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
}
