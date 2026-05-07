import React from "react";
import { Box, Typography } from "@mui/material";

export const Header: React.FC = () => {
	return (
		<Box
			component="header"
			sx={{
				width: "100%",
				display: "flex",
				py: 2.5,
				px: 4,
				borderBottom: "1px solid #E5E7EB",
				backgroundColor: "white",
				boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
			}}
		>
			<Typography
				variant="h5"
				sx={{
					fontWeight: 700,
					color: "#4F46E5",
					fontSize: "1.5rem",
				}}
			>
				To Do List
			</Typography>
		</Box>
	);
};
