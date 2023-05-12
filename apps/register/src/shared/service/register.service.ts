import { Inject, Injectable } from '@nestjs/common';
import { RegisterRepository } from '../repository/register.repository';
import { ClientProxy } from '@nestjs/microservices';
import { QueueOperation } from 'src/constants/queueOperation';
import { QueueNames } from 'src/constants/queueNames';
import { Cryptography } from '../utils/Cryptography';
import User from '../entity/User';

@Injectable()
export class RegisterService {
  constructor(
    private readonly registerRepository: RegisterRepository,
    private readonly cryptography: Cryptography,
    @Inject(QueueNames.REGISTER) private readonly registerClient: ClientProxy,
  ) {}

  public async addUser(user: User) {
    try {
      const newUser = await this.registerRepository.insertUser(user);

      const pass = await this.cryptography.encrypt(user.getPassword);

      user.setPassword = pass;

      this.registerClient.emit(QueueOperation.CREATE_USER, {
        user: user.toObject(),
      });

      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
