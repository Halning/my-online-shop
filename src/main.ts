import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSeeder } from './product/product.seeder';
import { UserSeeder } from './user/user.seeder';
import { setupSwagger } from '../swagger';
// import { Parasha } from './auth/parasha.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useConfiguredEnvironmentVariables();

  // app.use(Parasha);

  const productSeeder = app.get(ProductSeeder);
  await productSeeder.seed();

  const userSeeder = app.get(UserSeeder);
  await userSeeder.seed();

  setupSwagger(app);

  await app.listen(3000);
}

// Function to load environment-specific variables
function useConfiguredEnvironmentVariables() {
  // const env = process.env.NODE_ENV || 'development'; // Default to development

  // Load the appropriate environment file based on NODE_ENV
  const environmentFilePath = `.env`;

  // Load environment variables from the file
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const result = require('dotenv').config({ path: environmentFilePath });

  if (result.error) {
    throw result.error;
  }

  // Print a message indicating which environment variables were loaded
  console.log(`Loaded environment variables from ${environmentFilePath}`);

  // Optional: You can also validate or log the loaded variables here
  // For example: console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
}

bootstrap();
