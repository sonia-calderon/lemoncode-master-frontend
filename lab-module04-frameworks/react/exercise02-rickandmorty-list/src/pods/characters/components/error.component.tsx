import React from "react";
import { Typography } from "@mui/material";

export const ErrorComponent: React.FC = () => {
	return (
		<Typography color="error" sx={{ textAlign: "center" }}>
			ERROR
		</Typography>
	);
};
