import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

import DbConfig from './mikro-orm.config';
import { ProductSeeder } from './product/product.seeder';
import { UserSeeder } from './user/user.seeder';
import { UserModule } from './user/user.module';

@Module({
  providers: [ProductSeeder, UserSeeder],
  imports: [
    MikroOrmModule.forRoot(DbConfig),
    CartModule,
    OrderModule,
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
