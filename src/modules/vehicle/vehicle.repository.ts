import { Injectable } from "@nestjs/common";
import { Vehicle } from "generated/prisma";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class VehiclesRepository {
  constructor (private prisma: PrismaService) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany()
  }

  async findVehicleById(id: number): Promise<Vehicle | null> {
    return this.prisma.vehicle.findUnique({
      where: { id }
    })
  }

  async createVehicle(vehicle: Vehicle): Promise<Vehicle>{
    return this.prisma.vehicle.create({
      data: vehicle
    })
  }

  async softDeleteVehicle(id: number): Promise<Vehicle>{
    return await this.prisma.vehicle.update({
      where: { id },
      data: { updatedAt: new Date(), deletedAt: new Date() }
    })
  }
}