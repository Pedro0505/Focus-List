import { Injectable } from '@nestjs/common';
import { RegisterRepository } from '../repository/register.repository';

@Injectable()
export class RegisterService {
  constructor(private registerRepository: RegisterRepository) {}

  public addUser(user: { name: string; email: string }) {
    return this.registerRepository.addUser(user);
  }
}
