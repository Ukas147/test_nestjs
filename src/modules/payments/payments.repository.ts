import { Injectable } from "@nestjs/common";
import { Payment } from "generated/prisma";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class PaymentsRepository {
  constructor(private prisma: PrismaService) {}

  async findAllPayments(): Promise<Payment[]> {
    return this.prisma.payment.findMany()
  }
  async findPaymentById(id: number): Promise<Payment | null> {
    return this.prisma.payment.findUnique({
      where: { id }
    })
  }
  async createPayment(payment: Payment): Promise<Payment> {
    return this.prisma.payment.create({
      data: payment
    })
  }
  async softDeletePayment(id: number): Promise<Payment> {
    return await this.prisma.payment.update({
      where: { id },
      data: { updatedAt: new Date(), deletedAt: new Date() }
    })
  }
}