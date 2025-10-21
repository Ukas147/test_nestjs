import { Module } from "@nestjs/common";
import { VehiclesController } from "./vehicle.controller";
import { VehiclesService } from "./vehicle.service";
import { VehiclesRepository } from "./vehicle.repository";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, VehiclesRepository, PrismaService]
})
export class VehiclesModule{}