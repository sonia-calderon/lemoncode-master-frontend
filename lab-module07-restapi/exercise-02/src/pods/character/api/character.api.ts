import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`/api/character/${id}`);
  if (!response.ok) throw new Error(response.statusText);
  const data: Character = await response.json();
  return data;
};

export const saveBestSentence = async (
  character: Character
): Promise<boolean> => {
  const response = await fetch(`/api/character/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });

  return response.ok;
};
