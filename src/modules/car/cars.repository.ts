import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { Car } from 'generated/prisma';

@Injectable()
export class CarsRepository {
  constructor(private prisma: PrismaService) { }

  async findAllCars(): Promise<Car[]> {
    return this.prisma.car.findMany()
  }

  async findCarById(id: number): Promise<Car | null> {
    return this.prisma.car.findUnique({
      where: { id }
    })
  }

  async createCar(car: Car): Promise<Car> {
    return this.prisma.car.create({
      data: car
    })
  }

  async softDeleteCar(id: number): Promise<Car> {
    return await this.prisma.car.update({
      where: { id },
      data: { updatedAt: new Date(), deletedAt: new Date() },
    })
  }
}