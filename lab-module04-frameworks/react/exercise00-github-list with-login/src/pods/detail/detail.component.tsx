import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberDetailEntity } from "./detail.vm";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import InfoIcon from "@mui/icons-material/Info";

interface Props {
	member: MemberDetailEntity;
	org: string;
}

export const DetailComponent: React.FC<Props> = (props) => {
	const { member, org } = props;

	const InfoRow = ({
		icon,
		label,
		value,
	}: {
		icon: React.ReactNode;
		label: string;
		value: string | number | null | undefined;
	}) => (
		<Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
			<Box sx={{ color: "primary.main", mt: 0.5 }}>{icon}</Box>
			<Box sx={{ flex: 1 }}>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ fontWeight: 600, mb: 0.5 }}
				>
					{label}
				</Typography>
				<Typography variant="body1">
					{value || <em style={{ opacity: 0.5 }}>No disponible</em>}
				</Typography>
			</Box>
		</Stack>
	);

	return (
		<Stack spacing={4} sx={{ px: { xs: 1.5, sm: 2, md: 3 }, width: "100%" }}>
			{/* Back Navigation */}
			<Box>
				<Button
					component={Link}
					to={routes.list(org)}
					startIcon={<ArrowBackIcon />}
					sx={{
						color: "common.white",
						textTransform: "none",
						fontSize: { xs: "0.9rem", md: "1rem" },
						padding: { xs: "6px 12px", md: "8px 16px" },
						"&:hover": {
							backgroundColor: "rgba(15, 191, 62, 0.1)",
							color: "primary.main",
						},
					}}
				>
					Back to list page
				</Button>
			</Box>

			{/* Main Content Card */}
			<Card
				sx={{
					width: "100%",
					maxWidth: 1200,
					mx: "auto",
					backgroundColor: "background.paper",
					borderRadius: 2,
					overflow: "visible",
				}}
			>
				<CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={{ xs: 2, md: 4 }}
						sx={{ alignItems: { xs: "center", md: "flex-start" } }}
					>
						{/* Avatar Section */}
						<Box
							sx={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 2,
							}}
						>
							<Avatar
								src={member.avatar_url}
								alt={member.name || member.login}
								sx={{
									width: { xs: 140, sm: 200, md: 280 },
									height: { xs: 140, sm: 200, md: 280 },
									border: "4px solid",
									borderColor: "primary.main",
									boxShadow: "0 8px 24px rgba(15, 191, 62, 0.2)",
								}}
							/>
							<Chip
								label={`@${member.login}`}
								color="primary"
								sx={{
									fontWeight: "bold",
									fontSize: { xs: "0.75rem", md: "0.9rem" },
									px: 1,
								}}
							/>
						</Box>

						{/* Info Section */}
						<Stack spacing={3} sx={{ flex: 1, width: "100%" }}>
							{/* Header with Name */}
							<Box>
								<Typography
									variant="h4"
									component="h2"
									sx={{
										fontWeight: "bold",
										mb: 1,
										color: "common.white",
										fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
									}}
								>
									{member.name || member.login}
								</Typography>
								{member.name && (
									<Typography variant="body2" color="text.secondary">
										Username: @{member.login}
									</Typography>
								)}
							</Box>

							<Divider sx={{ borderColor: "divider" }} />

							{/* Info Rows */}
							<Stack spacing={2.5}>
								<InfoRow icon={<BadgeIcon />} label="ID" value={member.id} />

								{member.company && (
									<InfoRow
										icon={<BusinessIcon />}
										label="Company"
										value={member.company}
									/>
								)}

								{member.bio && (
									<InfoRow icon={<InfoIcon />} label="Bio" value={member.bio} />
								)}
							</Stack>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};
