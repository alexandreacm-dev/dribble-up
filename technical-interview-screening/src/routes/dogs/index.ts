import { Plugin } from '@hapi/hapi';
import { createDogHandler } from './create-dog';
import { deleteDogHandler } from './delete-dog';
import { getAllDogsHandler } from './get-all-dogs';
import { getDogHandler } from './get-dog';
import { updateDogHandler } from './update-dog';

const routes: Plugin<{}> = {
  register: (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/all',
        options: {
          handler: getAllDogsHandler
        },
      },
      {
        method: 'GET',
        path: '/{dogId}',
        options: {
          handler: getDogHandler,
          // auth: {
          //   strategies: ['duAuth'],
          //   scope: ['myService:read:dogs'],
          // },
        },
      },
      {
        method: 'POST',
        path: '/',
        options: {
          handler: createDogHandler,
          // auth: {
          //   strategies: ['duAuth'],
          //   scope: ['myService:write:dogs'],
          // },
        },
      },
      {
        method: 'PUT',
        path: '/{dogId}',
        options: {
          handler: updateDogHandler,
          // auth: {
          //   strategies: ['duAuth'],
          //   scope: ['myService:write:dogs'],
          // },
        },
      },
      {
        method: 'DELETE',
        path: '/',
        options: {
          handler: deleteDogHandler,
          // auth: {
          //   strategies: ['duAuth'],
          //   scope: ['myService:write:dogs'],
          // },
        },
      },
    ]);
  },
  name: 'dogs',
};

export default routes;
