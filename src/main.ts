import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSeeder } from './product/product.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const productSeeder = app.get(ProductSeeder);
  await productSeeder.seed();

  await app.listen(3000);
}
bootstrap();
