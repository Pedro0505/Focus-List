import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  public getHello(): string {
    return 'Hello World!';
  }
}
