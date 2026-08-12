import { ENV } from '#core/constants';
import { House } from './house.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = async (id: string): Promise<House> => {
  return await fetch(`${url}/${id}`).then((response) => response.json());
};

export const bookHouse = async (house: House): Promise<boolean> => {
  await fetch(`${url}/${house.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(house),
  });
  return true;
};
