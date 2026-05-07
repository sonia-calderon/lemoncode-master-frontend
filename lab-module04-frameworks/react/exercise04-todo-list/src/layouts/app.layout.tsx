import React from "react";
import { Stack } from "@mui/material";
import { Header } from "./components/header.component";
import { Footer } from "./components/footer.component";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Stack
				sx={{
					minHeight: "100vh",
					gap: 4, // 32px
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "aliceblue",
				}}
			>
				<Header />
				<Stack
					component="main"
					spacing={4}
					sx={{
						width: "100%",
						maxWidth: 1100,
						flex: 1,
					}}
				>
					{children}
				</Stack>
				<Footer />
			</Stack>
		</>
	);
};
