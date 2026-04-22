import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0FBF3E",
		},
		secondary: {
			main: "#8534F3",
		},
		background: {
			default: "#232925",
			paper: "#101411",
		},
		divider: "#3a3a3a", // Gris más claro con toque
	},
	typography: {
		fontFamily: [
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			"Open Sans",
			"Helvetica Neue",
			"sans-serif",
		].join(","),
		h1: {
			fontSize: "24px",
			margin: 0,
		},
	},
});
