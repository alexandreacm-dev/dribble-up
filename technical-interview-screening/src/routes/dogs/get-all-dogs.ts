import Boom from '@hapi/boom';
import { Lifecycle } from '@hapi/hapi';
import { getAllDogs } from '@/dog';

export const getAllDogsHandler: Lifecycle.Method = async () => {
  let dogs;
  try {
    dogs = await getAllDogs();
  } catch (e) {
    throw Boom.internal();
  }

  if (!dogs) {
    throw Boom.notFound('Dog not found');
  }
  return dogs;
};
