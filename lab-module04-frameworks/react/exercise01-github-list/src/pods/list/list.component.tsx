import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberEntity } from "./list.vm";
import searchIcon from "../../assets/search.svg";
import { styled, alpha } from "@mui/material/styles";
import {
	Avatar,
	List,
	ListItem,
	Pagination,
	Stack,
	Typography,
	Box,
	Paper,
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
	padding: "8px 24px",
	borderRadius: "8px",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	alignItems: "center",
	borderBottom: `1px solid ${theme.palette.secondary.main}`,
	padding: "16px 24px",
	"&:last-child": {
		borderBottom: "none",
	},
}));

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.common.white,
	textDecoration: "underline",
	"&:hover": {
		color: theme.palette.primary.main,
	},
}));

const PaginationButton = styled("button")<{ active?: boolean }>(
	({ theme, active }) => ({
		padding: "8px 16px",
		border: "none",
		borderRadius: "4px",
		backgroundColor: active ? theme.palette.primary.main : "transparent",
		color: theme.palette.common.white,
		cursor: "pointer",
		transition: "all 0.2s",
		fontWeight: active ? "bold" : "normal",
		minWidth: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "4px",
		"&:hover:not(:disabled)": {
			backgroundColor: active
				? theme.palette.primary.dark
				: theme.palette.background.paper,
		},
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	}),
);

interface Props {
	members: MemberEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
}

export const ListComponent: React.FC<Props> = (props) => {
	const { members, searchValue, onSearch, error } = props;

	const [inputValue, setInputValue] = React.useState("");

	const itemsPerPage = 10;
	const [currentPage, setCurrentPage] = React.useState(1);
	const totalPages = Math.ceil(members.length / itemsPerPage);
	const paginatedMembers = members.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.trim()) {
			onSearch(inputValue.trim());
			setInputValue("");
		}
	};

	return (
		<Stack spacing={4}>
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
							fontSize: "32px",
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

			<Stack spacing={2} className="list">
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
						<StyledListItem key={member.id} className="list__item">
							<Avatar src={member.avatar_url} sx={{ width: 80, height: 80 }} />
							<Typography>{member.id}</Typography>
							<StyledLink to={routes.details(searchValue, member.login)}>
								{member.login}
							</StyledLink>
						</StyledListItem>
					))}
				</List>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						justifyContent: "center",
						alignItems: "center",
						mt: 2,
					}}
				>
					<PaginationButton
						onClick={() => setCurrentPage((prev) => prev - 1)}
						disabled={currentPage === 1}
						aria-label="Previous page"
					>
						<ChevronLeftIcon sx={{ fontSize: "1.2rem" }} />
						Previous
					</PaginationButton>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<PaginationButton
							key={page}
							onClick={() => setCurrentPage(page)}
							active={currentPage === page}
							aria-label={`Page ${page}`}
							aria-current={currentPage === page ? "page" : undefined}
						>
							{page}
						</PaginationButton>
					))}

					<PaginationButton
						onClick={() => setCurrentPage((prev) => prev + 1)}
						disabled={currentPage === totalPages || totalPages === 0}
						aria-label="Next page"
					>
						Next
						<ChevronRightIcon sx={{ fontSize: "1.2rem" }} />
					</PaginationButton>
				</Stack>
			</Stack>
		</Stack>
	);
};
