import { Body, Controller, Post } from '@nestjs/common';
import User from '../entity/User';
import { RegisterService } from '../service/register.service';
import IUser from '../interface/IUser';

@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  public async addUser(@Body() user: IUser) {
    const newUser = new User(user.name, user.password, user.password);

    return await this.registerService.addUser(newUser);
  }
}
