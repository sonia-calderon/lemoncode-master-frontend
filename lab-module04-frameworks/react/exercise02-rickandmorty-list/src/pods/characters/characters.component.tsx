import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "core";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { CharacterEntity } from "./characters.vm";

import { Box, Alert, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Card, CardContent, Chip, Fade } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "12px",
	backgroundColor: "#1a1a2e",
	border: `2px solid #00D084`,
	transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
	"&:hover": {
		boxShadow:
			"0 0 15px rgba(0, 208, 132, 0.4), 0 0 30px rgba(0, 208, 132, 0.2)",
		borderColor: "#00FF84",
	},
	"&:focus-within": {
		boxShadow: "0 0 20px rgba(0, 208, 132, 0.6)",
		borderColor: "#00FF84",
	},
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(1),
	},
}));

const SearchIconWrapper = styled("button")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	left: "0.5rem",
	top: "50%",
	transform: "translateY(-50%)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1,
	color: "#00D084",
	border: "none",
	backgroundColor: "transparent",
	cursor: "pointer",
	transition: "color 0.2s ease",
	"&:hover": {
		color: "#00FF84",
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#fff",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 1.5, 1.5, 0),
		paddingLeft: "3rem",
		paddingRight: "1rem",
		height: "45px",
		boxSizing: "border-box",
		transition: theme.transitions.create("width"),
		width: "100%",
		backgroundColor: "transparent",
		fontSize: "1rem",
		"&::placeholder": {
			color: "#00D084",
			opacity: 0.7,
		},
		"&:-webkit-autofill": {
			WebkitBoxShadow: `0 0 0 100px #1a1a2e inset`,
			WebkitTextFillColor: "#fff",
		},
	},
}));

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

const PaginationContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: theme.spacing(1),
	marginTop: theme.spacing(3),
}));

const PaginationButton = styled("button")<{ active?: boolean }>(
	({ theme, active }) => ({
		padding: theme.spacing(1, 2),
		border: "none",
		borderRadius: "4px",
		backgroundColor: active ? "#00D084" : "transparent",
		color: active ? "#1a1a2e" : "#00D084",
		cursor: "pointer",
		transition: "all 0.2s ease",
		fontWeight: active ? "bold" : "normal",
		minWidth: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "4px",
		fontSize: "0.95rem",

		"&:hover:not(:disabled)": {
			backgroundColor: active ? "#00D084" : "rgba(0, 208, 132, 0.1)",
			transform: "translateY(-2px)",
		},
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	}),
);

const PaginationEllipsis = styled(Box)(({ theme }) => ({
	padding: theme.spacing(1, 2),
	minWidth: "40px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "0.95rem",
	color: theme.palette.common.white,
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(0.75, 1.5),
		minWidth: "32px",
		fontSize: "0.8rem",
	},
}));

interface Props {
	characters: CharacterEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
	initialPage?: number;
	initialCharacterId?: number;
}

export const CharactersComponent: React.FC<Props> = (props) => {
	const {
		characters,
		searchValue,
		onSearch,
		error,
		initialPage = 1,
		initialCharacterId,
	} = props;

	const [inputValue, setInputValue] = React.useState("");

	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = React.useState(initialPage);
	const totalPages = Math.ceil(characters.length / itemsPerPage);

	const getVisiblePages = (currentPage: number, totalPages: number) => {
		const pages: (number | string)[] = [];
		if (totalPages <= 6) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			// Siempre incluir 1
			pages.push(1);
			// Si currentPage > 4, añadir ... después de 1
			if (currentPage > 4) pages.push("...");
			// Añadir páginas alrededor de currentPage
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);
			for (let i = start; i <= end; i++) {
				if (!pages.includes(i)) pages.push(i);
			}
			// Si currentPage < totalPages - 3, añadir ... antes de totalPages
			if (currentPage < totalPages - 3) pages.push("...");
			// Siempre incluir totalPages si no está ya
			if (!pages.includes(totalPages)) pages.push(totalPages);
		}
		return pages;
	};

	const paginatedCharacters = characters.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	// acceder al DOM de cada miembro y hacer scroll hasta él
	const memberRefs = React.useRef<Map<number, HTMLLIElement>>(new Map());
	const ignoreNextScrollRef = React.useRef(false);
	const isInitialMount = React.useRef(true);
	const hasRestoredScroll = React.useRef(false);
	const previousInitialPageRef = React.useRef(initialPage);

	React.useEffect(() => {
		if (initialPage !== previousInitialPageRef.current) {
			ignoreNextScrollRef.current = true;
			setCurrentPage(initialPage);
			hasRestoredScroll.current = false;
			previousInitialPageRef.current = initialPage;
		}
	}, [initialPage]);

	// Restaurar scroll al volver del detalle
	React.useEffect(() => {
		if (
			!initialCharacterId ||
			characters.length === 0 ||
			hasRestoredScroll.current
		) {
			return;
		}

		const timeout = window.setTimeout(() => {
			const memberElement = memberRefs.current.get(initialCharacterId);
			if (memberElement) {
				memberElement.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				hasRestoredScroll.current = true;
			}
		}, 100);

		return () => window.clearTimeout(timeout);
	}, [initialCharacterId, characters.length, currentPage]);

	// Scroll al inicio al cambiar de página (excepto en la carga inicial o durante restauración)
	React.useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		if (ignoreNextScrollRef.current) {
			ignoreNextScrollRef.current = false;
			return;
		}

		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(inputValue.trim());
		setInputValue("");
		setCurrentPage(1);
	};

	const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onSearch(inputValue.trim());
		setInputValue("");
		setCurrentPage(1);
	};

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const handleMemberClick = (memberId: number) => {
		// Guardar el estado actual en sessionStorage
		sessionStorage.setItem("listPage", currentPage.toString());
		sessionStorage.setItem("listMemberId", memberId.toString());
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
			<Box component="form" onSubmit={handleSubmit}>
				<Search>
					<SearchIconWrapper onClick={handleIconClick}>
						<SearchIcon sx={{ width: "1rem", height: "1rem" }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search for a character"
						inputProps={{
							"aria-label": "search",
							name: "search",
							id: "search",
							autoComplete: "off",
						}}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</Search>
			</Box>

			{searchValue && (
				<Box>
					<Typography
						variant="h3"
						component="h3"
						sx={{
							fontSize: { xs: "1.5rem", sm: "2rem", md: "32px" },
							textTransform: "lowercase",
							"&::first-letter": {
								textTransform: "uppercase",
							},
						}}
					>
						Results for {searchValue}
					</Typography>
				</Box>
			)}
			{error && (
				<Box sx={{ width: "100%" }}>
					<Alert
						severity="error"
						sx={{
							backgroundColor: "rgba(255, 71, 87, 0.1)",
							border: "1px solid #FF4757",
							borderRadius: "8px",
							color: "#FF4757",
							fontWeight: 500,
						}}
					>
						{error}
					</Alert>
				</Box>
			)}
			{!error && (
				<Fade in={true} timeout={600}>
					<Box>
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
							{paginatedCharacters.map((character) => (
								<StyledLink
									key={character.id}
									to={routes.detail(character.id)}
									onClick={() => handleMemberClick(character.id)}
								>
									<StyledCard status={character.status}>
										<StyledCardMedia
											sx={{ backgroundImage: `url(${character.image})` }}
										/>
										<StyledCardContent>
											<CharacterName variant="h6">
												{character.name}
											</CharacterName>
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

						<Stack
							direction="row"
							spacing={1}
							sx={{
								flexWrap: "wrap",
								justifyContent: "center",
								alignItems: "center",
								mt: { xs: 1.5, md: 2 },
								width: "100%",
							}}
						>
							<PaginationButton
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								aria-label="Previous page"
							>
								<ChevronLeftIcon
									sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
								/>
								<Box sx={{ display: { xs: "none", sm: "inline" } }}>
									Previous
								</Box>
							</PaginationButton>

							{getVisiblePages(currentPage, totalPages).map((page, index) =>
								typeof page === "number" ? (
									<PaginationButton
										key={page}
										onClick={() => handlePageChange(page)}
										active={currentPage === page}
										aria-label={`Page ${page}`}
										aria-current={currentPage === page ? "page" : undefined}
									>
										{page}
									</PaginationButton>
								) : (
									<PaginationEllipsis key={`ellipsis-${index}`}>
										...
									</PaginationEllipsis>
								),
							)}

							<PaginationButton
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages || totalPages === 0}
								aria-label="Next page"
							>
								<Box sx={{ display: { xs: "none", sm: "inline" } }}>Next</Box>
								<ChevronRightIcon
									sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
								/>
							</PaginationButton>
						</Stack>
					</Box>
				</Fade>
			)}
		</Stack>
	);
};
