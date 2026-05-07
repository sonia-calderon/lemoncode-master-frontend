import React from "react";
import { Box, Typography, Link } from "@mui/material";

export const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: "100%",
				textAlign: "center",
				py: 3,
				px: 2,
				borderTop: "1px solid #E5E7EB",
			}}
		>
			<Typography
				variant="body2"
				component="span"
				sx={{
					color: "#6B7280",
					fontSize: "0.875rem",
				}}
			>
				&#10047; Coded by{" "}
				<Link
					href="https://github.com/sonia-calderon"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						color: "#4F46E5",
						fontWeight: 600,
						textDecoration: "none",
						"&:hover": {
							textDecoration: "underline",
							color: "#4338CA",
						},
					}}
				>
					Sonia Calderón
				</Link>
			</Typography>
		</Box>
	);
};
