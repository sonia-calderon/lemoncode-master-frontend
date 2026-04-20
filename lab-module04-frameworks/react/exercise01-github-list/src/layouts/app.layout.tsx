import React from "react";
import { ProfileContext } from "@/core/profile";
import githubSvg from "../assets/github.svg";
import { Box, Container, Stack, Typography, Link } from "@mui/material";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { userName } = React.useContext(ProfileContext);
	return (
		<>
			<Stack
				className="layout__container"
				sx={{
					minHeight: "100vh",
					gap: 4, // 32px
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box
					component="header"
					className="layout__header"
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						py: 3, // 24px
						px: { xs: 1.5, sm: 2, md: 3 },
						borderBottom: 1,
						borderColor: "divider",
					}}
				>
					<Stack
						className="layout__header-title"
						direction="row"
						spacing={1}
						sx={{ alignItems: "center" }}
					>
						<img src={githubSvg} width={24} height={24} alt="GitHub" />
						<Typography variant="h1" component="h1">
							Github Finder
						</Typography>
					</Stack>

					<Typography variant="body1" className="layout__header-company">
						{userName}
					</Typography>
				</Box>

				<Stack
					component="main"
					spacing={4} // 32px
					className="layout__main"
					sx={{
						width: "100%",
						maxWidth: 700,
						flex: 1, // para que ocupe el espacio disponible
					}}
				>
					{children}
				</Stack>

				<Box
					component="footer"
					className="layout__footer"
					sx={{
						borderTop: 1,
						borderColor: "divider",
						width: "100%",
						textAlign: "center",
						padding: 2, // 16px
					}}
				>
					<Typography variant="body2" component="span">
						&#10047; Coded by{" "}
						<Link
							href="https://github.com/sonia-calderon"
							target="_blank"
							rel="noopener noreferrer"
							color="primary"
							underline="hover"
						>
							Sonia Calderón
						</Link>
					</Typography>
				</Box>
			</Stack>
		</>
	);
};
