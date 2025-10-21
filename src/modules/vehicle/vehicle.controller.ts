import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VehiclesService } from "./vehicle.service";
import type { Vehicle } from "generated/prisma";

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}

  @Get()
  findAllVehicles() {
    return this.vehiclesService.findAllVehicles()
  }

  @Get(':id')
  findVehicleById(@Param('id') id: string) {
    return this.vehiclesService.findVehicleById(+id)
  }

  @Post()
  createVehicle(@Body() vehicle: Vehicle) {
    return this.vehiclesService.createVehicle(vehicle)
  }

  @Delete(':id')
  softDeleteVehicle(@Param('id') id: string) {
    return this.vehiclesService.softDeleteVehicle(+id)
  }

}