import { establishMongoConnection } from '@/util/mongo';
import { createDog } from './create-dog';
import { Dog } from './schema';

beforeAll(async () => {
  await establishMongoConnection();
});

describe('CREATE DOG', () => {
  it('Inserts a new customer record', async () => {
    await createDog('ZOE', 'doc', 'Black', 2);
    const doc = await Dog.findOne({ message: 'test' });
    expect(doc).not.toBeNull();
  });
});

afterEach(async () => {
  await Dog.deleteMany({});
});
