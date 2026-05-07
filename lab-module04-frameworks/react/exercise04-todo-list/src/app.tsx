import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { TasksPage } from "@/scenes/tasks";
import { theme } from "@/styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TasksPage />
		</ThemeProvider>
	);
};
