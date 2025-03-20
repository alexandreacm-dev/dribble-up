import { model, Schema } from 'mongoose';

/*
Properties must be added to both the interface and schema.
*/

export interface IDog {
  name: string;
  breed?: string;
  color?: string;
  weight?: number;
}

const schema = new Schema<IDog>({
  name: String,
  breed: String,
  color: String,
  weight: String,
}, { timestamps: true });

export const Dog = model<IDog>(
  'Dog',
  schema,
  'dogs',
);
