import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { versionKey: false },
);

export interface Register {
  id: string;
  email: string;
}
