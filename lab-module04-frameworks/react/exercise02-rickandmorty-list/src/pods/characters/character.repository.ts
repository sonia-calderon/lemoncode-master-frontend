import { CharacterEntity } from "./characters.vm";
import { getCharactersCollection as getCharactersCollectionApi } from "./api/characters.api";
import { mapCharacterCollectionFromApiToVm } from "./characters.mapper";

export const getCharacterCollection = (): Promise<CharacterEntity[]> => {
	return new Promise<CharacterEntity[]>((resolve) => {
		getCharactersCollectionApi().then((result) => {
			resolve(mapCharacterCollectionFromApiToVm(result));
		});
	});
};
