import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import type { Car } from "generated/prisma";

@Controller("cars")
export class CarsController {
  constructor(private carsService: CarsService) { }

  @Get()
  findAllCars(){
    return this.carsService.findAllCars()
  }

  @Get(":id")
  findCarById(@Param("id") id: number){
    return this.carsService.findCarById(+id)
  }

  @Post()
  createCar(@Body() car: Car){
    return this.carsService.createCar(car)
  }

  @Delete(":id")
  softDeleteCar(@Param("id") id: number){
    return this.carsService.softDeleteCar(+id)
  }
}