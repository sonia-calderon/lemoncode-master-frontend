import React from "react";
import { Typography } from "@mui/material";

interface Props {
	error?: string;
}

export const ErrorComponent: React.FC<Props> = (props) => {
	const { error } = props;
	return (
		<Typography color="error" sx={{ textAlign: "center" }}>
			{error}
		</Typography>
	);
};
