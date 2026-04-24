import { CharacterEntity } from "./characters.vm";
import { getCharactersCollection as getCharactersCollectionApi } from "./api/characters.api";
import { mapCharacterCollectionFromApiToVm } from "./characters.mapper";

export const getCharacterCollection = (
	character: string,
): Promise<CharacterEntity[]> => {
	return new Promise<CharacterEntity[]>((resolve) => {
		getCharactersCollectionApi(character).then((result) => {
			resolve(mapCharacterCollectionFromApiToVm(result));
		});
	});
};
