import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { JoiPipeModule } from 'nestjs-joi';
import { UserService } from 'src/user/user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';
import { Cart } from '../entities/cart.entity';
import { CartItem } from 'src/entities/cart-item.entity';
@Module({
  imports: [
    JoiPipeModule,
    MikroOrmModule.forFeature({ entities: [User, Cart, CartItem] }),
  ],
  providers: [CartService, UserService],
  controllers: [CartController],
})
export class CartModule {}
