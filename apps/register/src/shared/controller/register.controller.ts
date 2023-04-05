import { Body, Controller, Post } from '@nestjs/common';
import User from '../entity/User';
import { RegisterService } from '../service/register.service';

@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  public async addUser(@Body() user: User) {
    return await this.registerService.addUser(user);
  }
}
