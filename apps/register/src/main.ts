import { NestFactory } from '@nestjs/core';
import { RegisterModule } from './shared/register.module';

async function bootstrap() {
  const app = await NestFactory.create(RegisterModule);

  await app.listen(3003);
}

bootstrap();
