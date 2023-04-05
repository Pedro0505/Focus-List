import { Inject, Injectable } from '@nestjs/common';
import { RegisterRepository } from '../repository/register.repository';
import { ClientProxy } from '@nestjs/microservices';
import { QueueOperation } from 'src/constants/queueOperation';
import { QueueNames } from 'src/constants/queueNames';
import User from '../entity/User';

@Injectable()
export class RegisterService {
  constructor(
    private readonly registerRepository: RegisterRepository,
    @Inject(QueueNames.REGISTER) private readonly registerClient: ClientProxy,
  ) {}

  public async addUser(user: User) {
    try {
      const newUser = await this.registerRepository.insertUser(user);

      this.registerClient.emit(QueueOperation.CREATE_USER, { user });

      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
