import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CarsModule } from './modules/car/cars.module';

@Module({
  imports: [UsersModule, ProductsModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
