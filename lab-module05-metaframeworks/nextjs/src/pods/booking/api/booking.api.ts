import { ENV } from '#core/constants';

const url = `${ENV.BASE_API_URL}/houses`;

export const bookHouse = async (
  houseId: string,
  isBooked: boolean
): Promise<boolean> => {
  await fetch(`${url}/${houseId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isBooked }),
  });
  return true;
};
