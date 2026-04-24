import React from "react";
import { CharacterEntity } from "../characters.vm";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Box, Fade, Chip } from "@mui/material";

interface StatusColor {
	Alive: string;
	Dead: string;
	unknown: string;
}

const statusColors: StatusColor = {
	Alive: "#00D084",
	Dead: "#FF4757",
	unknown: "#FFD93D",
};

const StyledCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== "status",
})<{ status: string }>(({ theme, status }) => {
	const borderColor =
		statusColors[status as keyof StatusColor] || statusColors.unknown;
	return {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
		border: `2px solid ${borderColor}`,
		borderRadius: "12px",
		transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
		overflow: "hidden",
		position: "relative",
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: `radial-gradient(circle at top right, ${borderColor}15, transparent)`,
			pointerEvents: "none",
		},
		"&:hover": {
			transform: "translateY(-8px)",
			boxShadow: `0 12px 24px rgba(${
				status === "Alive"
					? "0, 208, 132"
					: status === "Dead"
						? "255, 71, 87"
						: "255, 217, 61"
			}, 0.3)`,
			borderColor: borderColor,
		},
		[theme.breakpoints.down("sm")]: {
			borderRadius: "10px",
		},
	};
});

const StyledCardMedia = styled(Box)({
	height: 200,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	transition: "transform 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
	},
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: theme.spacing(2),
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),
	position: "relative",
	zIndex: 1,
}));

const StyledLink = styled(Link)({
	textDecoration: "none",
	color: "inherit",
	height: "100%",
	display: "flex",
	flexDirection: "column",
});

const CharacterName = styled(Typography)(({ theme }) => ({
	fontSize: "1.1rem",
	fontWeight: "bold",
	color: "#00D084",
	textTransform: "uppercase",
	letterSpacing: "0.5px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const CharacterInfo = styled(Typography)(({ theme }) => ({
	fontSize: "0.9rem",
	color: "#bdbecb",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.85rem",
	},
}));

const StatusChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== "status",
})<{ status: string }>(({ status }) => {
	const backgroundColor =
		statusColors[status as keyof StatusColor] || statusColors.unknown;
	return {
		backgroundColor: `${backgroundColor}25`,
		color: backgroundColor,
		fontWeight: "bold",
		fontSize: "0.8rem",
		border: `1.5px solid ${backgroundColor}`,
		height: "auto",
		padding: "4px 8px",
	};
});

interface Props {
	characters: CharacterEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
	const { characters } = props;
	return (
		<Fade in={true} timeout={600}>
			<Box
				className="list"
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
						lg: "repeat(4, 1fr)",
					},
					gap: { xs: 2, sm: 2.5, md: 3 },
					width: "100%",
				}}
			>
				{characters.map((character) => (
					<StyledLink key={character.id} to="">
						<StyledCard status={character.status}>
							<StyledCardMedia
								sx={{ backgroundImage: `url(${character.image})` }}
							/>
							<StyledCardContent>
								<CharacterName variant="h6">{character.name}</CharacterName>
								<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
									<StatusChip
										label={character.status}
										status={character.status}
										size="small"
									/>
									<StatusChip
										label={character.species}
										status="unknown"
										size="small"
									/>
								</Box>
								<CharacterInfo variant="body2">
									<strong>Origin:</strong> {character.origin.name}
								</CharacterInfo>
							</StyledCardContent>
						</StyledCard>
					</StyledLink>
				))}
			</Box>
		</Fade>
	);
};
