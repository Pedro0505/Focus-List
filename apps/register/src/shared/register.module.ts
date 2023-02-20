import { Module } from '@nestjs/common';
import { registerForFeature, registerForRoot } from 'src/db/register.db';
import { RegisterController } from './controller/register.controller';
import { RegisterRepository } from './repository/register.repository';
import { RegisterService } from './service/register.service';

@Module({
  imports: [registerForFeature, registerForRoot],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterRepository],
})
export class RegisterModule {}
