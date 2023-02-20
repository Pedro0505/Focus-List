import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { REGISTER } from '../constants/modelNames';
import { RegisterSchema } from './register.model';

export const registerForFeature = MongooseModule.forFeature([
  {
    name: REGISTER,
    schema: RegisterSchema,
  },
]);

export const registerForRoot = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    uri: config.get<string>('DATABASE_URL'),
  }),
});
