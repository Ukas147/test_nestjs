import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from 'generated/prisma';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  
  async findAllProducts() {
    return this.productsRepository.findAllProducts();
  }

  async findProductById(id: number) {
    return this.productsRepository.findProductById(id);
  }

  async createProduct(product: Product) {
    return this.productsRepository.createProduct(product);
  }

  async softDeleteProduct(id: number) {
    return this.productsRepository.softDeleteProduct(id);
  }
}