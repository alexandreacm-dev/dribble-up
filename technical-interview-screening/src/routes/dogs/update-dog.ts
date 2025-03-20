import Boom from '@hapi/boom';
import { Lifecycle } from '@hapi/hapi';
import { z } from 'zod';
import { updateDog } from '@/dog';
import { IDog } from '@/dog/schema';

const payloadSchema = z.object({
  name: z.string(),
  breed: z.string(),
  color: z.string(),
  weight: z.number(),
});

export const updateDogHandler: Lifecycle.Method = async ({ params: { dogId }, payload }) => {
  let updatedDog;
  let dog: IDog;

  try {
    updatedDog = payloadSchema.parse(payload);
    dog = updatedDog;

  } catch (e: any) {
    throw Boom.badRequest('Validation error', e.issues);
  }


  try {
    return await updateDog(dogId, dog);
  } catch (e) {
    throw Boom.internal();
  }
};
