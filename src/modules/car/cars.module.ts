import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepository } from './cars.repository';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, CarsRepository, PrismaService],
})
export class CarsModule {}
