import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberEntity } from "./list.vm";
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
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "12px",
	backgroundColor: theme.palette.background.paper,
	border: `1.5px solid ${theme.palette.divider}`,
	transition: "all 0.25s cubic-bezier(0.19, 1, 0.22, 1)",
	"&:hover": {
		boxShadow: "0 0 0 2.5px #2f303d, 0px 0px 25px -15px #000",
	},
	"&:focus-within": {
		boxShadow: "0 0 0 2.5px #2f303d",
	},
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(1),
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	left: "0.5rem",
	top: "50%",
	transform: "translateY(-50%)",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1,
	color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: theme.palette.common.white,
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 1, 1.5, 0),
		paddingLeft: "3rem",
		paddingRight: "1rem",
		height: "45px",
		boxSizing: "border-box",
		transition: theme.transitions.create("width"),
		width: "100%",
		backgroundColor: "transparent",
		"&::placeholder": {
			color: "#bdbecb",
			opacity: 1,
		},
		"&:-webkit-autofill": {
			WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
			WebkitTextFillColor: theme.palette.common.white,
		},
	},
}));

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

const PaginationButton = styled("button")<{ active?: boolean }>(
	({ theme, active }) => ({
		padding: theme.spacing(1, 2),
		border: "none",
		borderRadius: "4px",
		backgroundColor: active ? theme.palette.primary.main : "transparent",
		color: theme.palette.common.white,
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
			backgroundColor: active
				? theme.palette.primary.dark
				: theme.palette.secondary.main,
			transform: "translateY(-2px)",
		},
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(0.75, 1.5),
			minWidth: "32px",
			fontSize: "0.8rem",
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
	members: MemberEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
	initialPage?: number;
	initialMemberId?: number;
}

export const ListComponent: React.FC<Props> = (props) => {
	const {
		members,
		searchValue,
		onSearch,
		error,
		initialPage = 1,
		initialMemberId,
	} = props;

	const [inputValue, setInputValue] = React.useState("");

	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = React.useState(initialPage);
	const totalPages = Math.ceil(members.length / itemsPerPage);

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

	const paginatedMembers = members.slice(
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
		if (!initialMemberId || members.length === 0 || hasRestoredScroll.current) {
			return;
		}

		const timeout = window.setTimeout(() => {
			const memberElement = memberRefs.current.get(initialMemberId);
			if (memberElement) {
				memberElement.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				hasRestoredScroll.current = true;
			}
		}, 100);

		return () => window.clearTimeout(timeout);
	}, [initialMemberId, members.length, currentPage]);

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
		if (inputValue.trim()) {
			onSearch(inputValue.trim());
			setInputValue("");
			setCurrentPage(1);
		}
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
			<Box component="form" className="search" onSubmit={handleSubmit}>
				<Search>
					<SearchIconWrapper>
						<SearchIcon sx={{ width: "1rem", height: "1rem" }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search for a company"
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
						{searchValue}
					</Typography>
				</Box>
			)}
			{error && (
				<Typography color="error" sx={{ textAlign: "center" }}>
					{error}
				</Typography>
			)}

			{!error && (
				<Fade in={true} timeout={600}>
					<Stack spacing={2} className="list" sx={{ width: "100%" }}>
						<ListHeader className="list__header">
							<Typography component="span" sx={{ fontWeight: "bold" }}>
								Avatar
							</Typography>
							<Typography component="span" sx={{ fontWeight: "bold" }}>
								Id
							</Typography>
							<Typography component="span" sx={{ fontWeight: "bold" }}>
								Name
							</Typography>
						</ListHeader>

						<List className="list__items" sx={{ padding: 0 }}>
							{paginatedMembers.map((member) => (
								<StyledListItem
									key={member.id}
									className="list__item"
									ref={(el) => {
										if (el) {
											memberRefs.current.set(member.id, el);
										}
									}}
								>
									<Avatar
										src={member.avatar_url}
										sx={{ width: 80, height: 80 }}
									/>
									<Typography>{member.id}</Typography>
									<StyledLink
										to={routes.details(searchValue, member.login)}
										onClick={() => handleMemberClick(member.id)}
									>
										{member.login}
									</StyledLink>
								</StyledListItem>
							))}
						</List>
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
					</Stack>
				</Fade>
			)}
		</Stack>
	);
};
