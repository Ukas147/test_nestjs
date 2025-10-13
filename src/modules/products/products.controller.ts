import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Product } from 'generated/prisma';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id') id: number) {
    return this.productsService.findProductById(+id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productsService.createProduct(product);
  }

  @Delete(':id')
  softDeleteProduct(@Param('id') id:number) {
    return this.productsService.softDeleteProduct(+id);
  }
}