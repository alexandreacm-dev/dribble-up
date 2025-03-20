import { Dog, IDog } from './schema';

export const updateDog = async (dogId: string, updatedDog: IDog) => {
  const filter = { _id: dogId }

  return await Dog.findOneAndUpdate(filter, updatedDog, { new: true });
};
