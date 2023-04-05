import { NestFactory } from '@nestjs/core';
import { RegisterModule } from './shared/register.module';

async function bootstrap() {
  const app = await NestFactory.create(RegisterModule);

  const PORT = process.env.PORT_API;

  await app.listen(PORT);
}

bootstrap();
