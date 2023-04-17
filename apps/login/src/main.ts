import { NestFactory } from '@nestjs/core';
import { RmqService } from './infra/rabbitmq/rmq.service';
import { LoginModule } from './shared/login.module';

async function bootstrap() {
  const app = await NestFactory.create(LoginModule);
  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice(rmqService.getOptions('REGISTER'));

  await app.startAllMicroservices();
  await app.listen(3004);
}

bootstrap();
