import { Dog } from './schema';

export const createDog = async (
  name: string,
  breed: string,
  color: string,
  weight: number) => {
  const doc = new Dog({
    name,
    breed,
    color,
    weight
  });

  await doc.save();
  return {
    id: doc.id,
    name: doc.name,
    breed: doc.breed,
    color: doc.color,
    weight: doc.weight
  };
};
