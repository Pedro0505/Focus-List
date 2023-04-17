import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from 'src/infra/rabbitmq/rmq.module';
import { RmqService } from 'src/infra/rabbitmq/rmq.service';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RmqModule],
  controllers: [LoginController],
  providers: [LoginService, RmqService],
})
export class LoginModule {}
