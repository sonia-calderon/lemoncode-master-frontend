import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

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

export const ListHeaderComponent = () => {
	return (
		<ListHeader>
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
	);
};
