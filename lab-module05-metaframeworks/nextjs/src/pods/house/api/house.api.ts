import { ENV } from '#core/constants';
import { House } from './house.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = async (id: string) => {
  const response = await fetch(`${url}/${id}`, {
    cache: 'no-store',
  });

  return response.json();
};

export const bookHouse = async (house: House): Promise<boolean> => {
  const response = await fetch(`${url}/${house.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(house),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar la reserva');
  }

  return true;
};
