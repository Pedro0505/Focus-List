import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { REGISTER } from 'src/constants/modelNames';
import { Register } from 'src/db/register.model';
import { Model } from 'mongoose';
import User from '../entity/User';

@Injectable()
export class RegisterRepository {
  constructor(@InjectModel(REGISTER) private registerModel: Model<Register>) {}

  public async insertUser(user: User) {
    return this.registerModel.create(user);
  }
}
