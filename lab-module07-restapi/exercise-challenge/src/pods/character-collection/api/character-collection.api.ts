import { CharacterApiResponse } from './character-collection.api-model';

const url = `https://rickandmortyapi.com/api/character`;

export const getCharacterCollection = async (
  page: number,
  name?: string
): Promise<CharacterApiResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
  });

  if (name) {
    params.append('name', name);
  }

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) throw new Error(response.statusText);

  const data: CharacterApiResponse = await response.json();

  return data;
};
