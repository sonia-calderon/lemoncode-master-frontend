import {
  CharacterApiResponse,
  CharacterEntityApi,
} from './character-collection.api-model';

const url = `https://rickandmortyapi.com/api/character`;

let allCharacters: CharacterEntityApi[] = [];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(url);

  if (!response.ok) throw new Error(response.statusText);

  const data: CharacterApiResponse = await response.json();
  allCharacters = [...allCharacters, ...data.results];

  return allCharacters;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  allCharacters = allCharacters.filter((character) => character.id !== id);
  return true;
};
