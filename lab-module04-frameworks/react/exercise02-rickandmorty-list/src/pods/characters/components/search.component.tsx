import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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

interface Props {
	onSearch: (value: string) => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
	const { onSearch } = props;
	const [inputValue, setInputValue] = React.useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.trim()) {
			onSearch(inputValue.trim());
			setInputValue("");
			//setCurrentPage(1);
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Search>
				<SearchIconWrapper>
					<SearchIcon sx={{ width: "1rem", height: "1rem" }} />
				</SearchIconWrapper>
			</Search>
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
		</Box>
	);
};
