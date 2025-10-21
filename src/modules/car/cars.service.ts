import { Injectable } from "@nestjs/common";
import { CarsRepository } from "./cars.repository";
import { Car } from "generated/prisma"

@Injectable()
export class CarsService {
  constructor ( private carsRepository: CarsRepository ){}

  async findAllCars() {
    return this.carsRepository.findAllCars()
  }

  async findCarById(id: number) {
    return this.carsRepository.findCarById(id)
  }

  async createCar(car: Car){
    return this.carsRepository.createCar(car)
  }

  async softDeleteCar(id: number){
    return this.carsRepository.softDeleteCar(id)
  }
}