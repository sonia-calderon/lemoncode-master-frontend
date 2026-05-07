import React from "react";
import { Stack } from "@mui/material";
import { Header } from "./components/header.component";
import { Footer } from "./components/footer.component";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<Stack
			sx={{
				minHeight: "100vh",
				backgroundColor: "#F9FAFB",
			}}
		>
			<Header />
			<Stack
				component="main"
				sx={{
					width: "100%",
					flex: 1,
					py: 4,
				}}
			>
				{children}
			</Stack>
			<Footer />
		</Stack>
	);
};
