import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false },
);

export interface Register {
  id: string;
  email: string;
  name: string;
  password: string;
}
