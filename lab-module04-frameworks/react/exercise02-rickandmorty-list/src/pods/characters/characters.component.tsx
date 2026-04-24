import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "core";
import {
	Avatar,
	List,
	ListItem,
	Stack,
	Typography,
	Box,
	Fade,
} from "@mui/material";
import { SearchComponent } from "./components/search.component";
import { ErrorComponent } from "./components/error.component";
import { ListComponent } from "./components/list.component";
import { CharacterEntity } from "./characters.vm";
import { getCharacterCollection } from "./character.repository";

interface Props {
	error?: string;
}

export const CharactersComponent: React.FC<Props> = (props) => {
	const { error } = props;
	const { character } = useParams<{ character: string }>();

	const navigate = useNavigate();

	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

	React.useEffect(() => {
		getCharacterCollection(character ?? "").then((characterCollection) =>
			setCharacters(characterCollection),
		);
	}, [character]);

	const handleSearch = (value: string) => {
		const trimmed = value.trim();
		if (!trimmed) return;
		console.log(trimmed);
		navigate(routes.characters(trimmed));
	};

	return (
		<Stack
			spacing={{ xs: 2, md: 4 }}
			sx={{
				width: "100%",
				maxWidth: 1080,
				mx: "auto",
				px: { xs: 1.5, sm: 2, md: 3 },
			}}
		>
			<SearchComponent onSearch={handleSearch} />
			{error && <ErrorComponent />}
			{!error && <ListComponent characters={characters} />}
		</Stack>
	);
};
