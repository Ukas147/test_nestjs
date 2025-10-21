import { Injectable } from "@nestjs/common";
import { PaymentsRepository } from "./payments.repository";
import { Payment } from "generated/prisma";

@Injectable()
export class PaymentsService {
  constructor(private paymentsRepository: PaymentsRepository) {}

  async findAllPayments() {
    return this.paymentsRepository.findAllPayments()
  }
  async findPaymentById(id: number) {
    return this.paymentsRepository.findPaymentById(id)
  }
  async createPayment(payment: Payment) {
    return this.paymentsRepository.createPayment(payment)
  }
  async softDeletePayment(id: number) {
    return this.paymentsRepository.softDeletePayment(id)
  }
}