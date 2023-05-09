import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class Cryptography {
  public async encrypt(password: string) {
    const salt = await genSalt(10);

    const hashed = await hash(password, salt);

    return hashed;
  }

  public async decryption(password: string, passwordDB: string) {
    const verify = await compare(password, passwordDB);

    return verify;
  }
}
