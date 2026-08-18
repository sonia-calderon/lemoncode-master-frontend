import { ENV } from '#core/constants';
import { House } from './house.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = async (id: string) => {
  const response = await fetch(`${url}/${id}`, {
    cache: 'no-store',
  });

  return response.json();
};
