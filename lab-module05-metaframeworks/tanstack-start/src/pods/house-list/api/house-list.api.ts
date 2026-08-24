import { ENV } from '#core/constants';
import { House } from './house-list.api-model';
import { createServerFn } from '@tanstack/react-start';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = createServerFn().handler(
  async (): Promise<House[]> => {
    const response = await fetch(url);

    return response.json();
  }
);
