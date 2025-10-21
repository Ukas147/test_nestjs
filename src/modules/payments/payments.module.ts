import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments.controller";
import { PaymentsService } from "./payments.service";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { PaymentsRepository } from "./payments.repository";

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsRepository, PrismaService],
  exports: [PaymentsService],
})
export class PaymentsModule {}