import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QueueNames } from '../constants/queueNames';
import { registerForFeature, registerForRoot } from '../db/register.db';
import { RmqModule } from '../infra/rabbitmq/rmq.module';
import { RegisterController } from './controller/register.controller';
import { RegisterRepository } from './repository/register.repository';
import { RegisterService } from './service/register.service';
import { Cryptography } from './utils/Cryptography';

@Module({
  imports: [
    registerForFeature,
    registerForRoot,
    RmqModule.register({
      name: QueueNames.REGISTER,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterRepository, Cryptography],
})
export class RegisterModule {}
