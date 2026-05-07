import React from "react";
import { Box, Typography } from "@mui/material";

export const Header: React.FC = () => {
	return (
		<Box
			component="header"
			sx={{
				width: "100%",
				display: "flex",
				py: 3,
				px: { xs: 1.5, sm: 2, md: 3 },
				borderBottom: "1px solid black",
			}}
		>
			<Typography variant="h5">To Do List</Typography>
		</Box>
	);
};
