import { CharacterEntityApi } from "./characters.api-model";

export const getCharactersCollection = (
	character: string,
): Promise<CharacterEntityApi[]> => {
	return fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
		.then((response) => response.json())
		.then((data) => data.results);
};
