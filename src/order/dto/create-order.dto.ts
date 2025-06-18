export class CreateOrderDto {
  totalPrice: number;
  status: 'PENDING' | 'CANCELED' | 'DELIVERED' | 'DELIVERING' | 'PROCESSING';
  subtotal: number;
  shippingRate: number;
  paymentId: string;
}
