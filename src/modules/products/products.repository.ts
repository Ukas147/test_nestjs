import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { Product } from 'generated/prisma';

@Injectable()
export class ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async findAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findProductById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }
  async createProduct(product: Product): Promise<Product> {
    return this.prisma.product.create({
      data: product,
    });
  }

  async softDeleteProduct(id: number): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: { updatedAt: new Date(), deletedAt: new Date() },
    });
  }
}
