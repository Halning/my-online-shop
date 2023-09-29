import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

import DbConfig from './mikro-orm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './helth.controller';

@Module({
  imports: [
    MikroOrmModule.forRoot(DbConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CartModule,
    OrderModule,
    ProductModule,
    UserModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
