import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import type { Payment } from "generated/prisma";

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Get()
  findAllPayments() {
    return this.paymentsService.findAllPayments()
  }
  @Get(':id')
  findPaymentById(@Param('id') id: string) {
    return this.paymentsService.findPaymentById(+id)
  }
  @Post()
  createPayment(@Body() payment: Payment) {
    return this.paymentsService.createPayment(payment)
  }
  @Delete(':id')
  softDeletePayment(@Param('id') id: string) {
    return this.paymentsService.softDeletePayment(+id)
  }
}