import { Character } from './character.api-model';
import { Lookup } from '#common/models';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) throw new Error(response.statusText);
  const data: Character = await response.json();
  return data;
};
