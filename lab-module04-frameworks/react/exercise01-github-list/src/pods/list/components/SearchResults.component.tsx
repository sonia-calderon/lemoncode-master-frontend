import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
	searchValue: string;
}

export const SearchResultsComponent: React.FC<Props> = (props) => {
	const { searchValue } = props;
	return (
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
	);
};
