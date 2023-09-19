import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

import DbConfig from './mikro-orm.config';
import { ProductSeeder } from './product/product.seeder';

@Module({
  providers: [ProductSeeder],
  imports: [
    MikroOrmModule.forRoot(DbConfig),
    CartModule,
    OrderModule,
    ProductModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //     consumer
  //         .apply(AuthGuard)
  //         .forRoutes('*');
  // }
}
