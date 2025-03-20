import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export const establishMongoConnection = async () => {
  const mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri, {});
};
