import { Server } from '@hapi/hapi';
import { establishMongoConnection } from '@/util/mongo';
import dogs from './dogs';

const options = {
  routes: { prefix: '/api/v1.0/dogs' },
}

export const routes = async (server: Server) => {
  await establishMongoConnection();
  await server.register(dogs, options);
};
