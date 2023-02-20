import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../service/register.service';

@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  public async addUser(@Body() body) {
    return this.registerService.addUser(body);
  }
}
