import { Dog } from './schema';

export const getAllDogs = async () => {
  const doc = await Dog.find();
  if (!doc.length) {
    return;
  }
  return doc
};
