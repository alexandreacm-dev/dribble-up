import { Dog } from './schema';

export const deleteDog = async (dogId: string) => {
  return await Dog.findOneAndDelete({ _id: dogId });
};
