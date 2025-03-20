import { Server } from '@hapi/hapi';
import { establishMongoConnection } from '@/util/mongo';
import { createDogHandler } from './create-dog';

const server = new Server();
beforeAll(async () => {
  await establishMongoConnection();

  server.route({
    method: 'POST',
    path: '/',
    options: {
      handler: createDogHandler,
    },
  });
  await server.start();
});

describe('createDogHandler', () => {
  it('Responds with an id', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/',
      payload: {
        message: 'test',
      },
    });
    expect(JSON.parse(res.payload)).toHaveProperty('id');
  });
});

afterAll(async () => {
  await server.stop();
});
