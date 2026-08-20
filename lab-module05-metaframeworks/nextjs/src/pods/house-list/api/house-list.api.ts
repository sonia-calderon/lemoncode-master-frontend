import { ENV } from '#core/constants';
import { House } from './house-list.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = async (options?: RequestInit): Promise<House[]> => {
  console.log('🌐 getHouseList():', new Date().toISOString());

  const response = await fetch(url, options);

  console.log('🌐 fetch terminado:', new Date().toISOString());

  return response.json();

  //return await fetch(url, options).then((response) => response.json());
};
