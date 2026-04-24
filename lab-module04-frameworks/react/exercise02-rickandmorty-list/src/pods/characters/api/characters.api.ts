import { CharacterEntityApi } from "./characters.api-model";

export const getCharactersCollection = (): Promise<CharacterEntityApi[]> => {
	return fetch(`https://rickandmortyapi.com/api/character`)
		.then((response) => response.json())
		.then((data) => data.results);
};
