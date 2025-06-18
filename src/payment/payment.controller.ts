import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { SkipAuth } from 'src/decorators/skip-auth.decorator';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @SkipAuth()
  @Get()
  findAll() {
    return this.paymentService.findAll();
  }
}
