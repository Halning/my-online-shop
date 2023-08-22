import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  providers: [],
  imports: [CartModule, OrderModule, ProductModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //     consumer
  //         .apply(AuthGuard)
  //         .forRoutes('*');
  // }
}
