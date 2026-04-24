import React from "react";
import { CharacterEntity } from "../characters.vm";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
	Avatar,
	List,
	ListItem,
	Stack,
	Typography,
	Box,
	Fade,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ListHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.common.white,
	fontWeight: "bold",
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	alignItems: "center",
	padding: theme.spacing(1, 3),
	borderRadius: "8px",
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	alignItems: "center",
	borderBottom: `1px solid ${theme.palette.divider}`,
	padding: theme.spacing(2, 3),
	gap: theme.spacing(2),
	width: "100%",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "scale(1.02)",
	},
	"&:last-child": {
		borderBottom: "none",
	},
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		padding: theme.spacing(2),
		gap: theme.spacing(1.5),
	},
}));

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.common.white,
	textDecoration: "underline",
	word: "break-word",
	"&:hover": {
		color: theme.palette.primary.main,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.95rem",
	},
}));

interface Props {
	characters: CharacterEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
	const { characters } = props;
	return (
		<Fade in={true} timeout={600}>
			<Stack spacing={2} className="list" sx={{ width: "100%" }}>
				Aquí la lista
				{characters.map((character) => (
					<div>
						<img src={character.image} alt="" />
						<p>Name: {character.name}</p>
						<p>Status: {character.status}</p>
						<p>Species: {character.species}</p>
						<p>Origin: {character.origin.name}</p>
					</div>
				))}
			</Stack>
		</Fade>
	);
};
