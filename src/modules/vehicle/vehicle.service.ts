import { Injectable } from "@nestjs/common";
import { VehiclesRepository } from "./vehicle.repository";
import { Vehicle } from "generated/prisma";

@Injectable()
export class VehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) { }

  async findAllVehicles() {
    return this.vehiclesRepository.findAllVehicles()
  }

  async findVehicleById(id: number) {
    return this.vehiclesRepository.findVehicleById(id)
  }

  async createVehicle(vehicle: Vehicle) {
    return this.vehiclesRepository.createVehicle(vehicle)
  }

  async softDeleteVehicle(id: number) {
    return this.vehiclesRepository.softDeleteVehicle(id)
  }
}