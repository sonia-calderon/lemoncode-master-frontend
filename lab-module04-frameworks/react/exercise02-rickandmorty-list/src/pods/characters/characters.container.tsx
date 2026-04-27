import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CharactersComponent } from "./characters.component";
import { CharacterEntity } from "./characters.vm";
import {
	getCharacterCollection,
	getAllCharacterCollection,
} from "./character.repository";
import { routes } from "core";

const defaultCharacter = "";

export const CharactersContainer: React.FC = () => {
	const { character } = useParams<{ character: string }>();
	const navigate = useNavigate();

	// members
	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

	const [searchValue, setSearchValue] = React.useState(
		character ?? defaultCharacter,
	);
	const [error, setError] = React.useState<string | undefined>();

	// Recuperar el estado guardado
	const [initialPage, setInitialPage] = React.useState(1);
	const [initialCharacterId, setInitialCharacterId] = React.useState<
		number | undefined
	>();

	// Guardar el último personaje para detectar si cambió
	const previousCharacterRef = React.useRef<string | undefined>(undefined);

	React.useEffect(() => {
		const savedPage = sessionStorage.getItem("listPage");
		const savedMemberId = sessionStorage.getItem("listMemberId");

		if (savedPage) {
			setInitialPage(parseInt(savedPage, 10));
			sessionStorage.removeItem("listPage");
		}

		if (savedMemberId) {
			setInitialCharacterId(parseInt(savedMemberId, 10));
			sessionStorage.removeItem("listMemberId");
		}
	}, []);

	React.useEffect(() => {
		const currentCharacter = character?.trim() || defaultCharacter;

		if (
			previousCharacterRef.current &&
			previousCharacterRef.current !== currentCharacter
		) {
			setInitialPage(1);
			setInitialCharacterId(undefined);
		}
		previousCharacterRef.current = currentCharacter;

		setSearchValue(currentCharacter);
		setError(undefined);
		setCharacters([]);

		const fetchCharacters = async () => {
			try {
				const characterCollection = currentCharacter
					? await getCharacterCollection(currentCharacter)
					: await getAllCharacterCollection();

				setCharacters(characterCollection);
				console.log(characterCollection);
			} catch (err) {
				setCharacters([]);
				setError(
					currentCharacter
						? `No character found with the name "${currentCharacter}"`
						: "Failed to load characters",
				);
			}
		};

		fetchCharacters();
	}, [character]);

	const handleSearch = (value: string) => {
		const trimmed = value.trim();
		console.log(value);
		if (!trimmed) {
			navigate(routes.root);
		} else {
			navigate(routes.characters(trimmed));
		}
	};

	return (
		<CharactersComponent
			characters={characters}
			searchValue={searchValue}
			onSearch={handleSearch}
			error={error}
			initialPage={initialPage}
			initialCharacterId={initialCharacterId}
		/>
	);
};
