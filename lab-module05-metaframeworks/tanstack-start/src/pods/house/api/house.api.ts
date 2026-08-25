import { ENV } from '#core/constants';
import { createServerFn } from '@tanstack/react-start';
import { House } from './house.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = createServerFn()
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<House> => {
    console.log('🏡 getHouse:', data.id, new Date().toISOString());

    const response = await fetch(`${url}/${data.id}`);

    return response.json();
  });

export const bookHouse = createServerFn({ method: 'POST' })
  .validator((house: House) => house)
  .handler(async ({ data }): Promise<boolean> => {
    await fetch(`${url}/${data.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return true;
  });
