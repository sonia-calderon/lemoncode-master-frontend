import React from "react";
import { Box, Stack, Chip, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Task } from "../task.vm";

interface Props {
	filter: Task["category"] | "all";
	setFilter: (value: Task["category"] | "all") => void;
	availableCategories: Set<Task["category"]>;
}

export const CategoriesComponent: React.FC<Props> = (props) => {
	const { filter, setFilter, availableCategories } = props;
	return (
		<Box>
			<Typography
				variant="h6"
				sx={{
					mb: 2.5,
					fontWeight: 600,
					color: "#0F172A",
					fontSize: "1.25rem",
				}}
			>
				Categories
			</Typography>

			<Stack
				direction="row"
				spacing={1}
				sx={{
					gap: 1,
					flexWrap: "wrap",
					alignItems: "center",
				}}
			>
				<Chip
					icon={<FormatListBulletedIcon sx={{ fontSize: 18 }} />}
					label="All Tasks"
					clickable
					onClick={() => setFilter("all")}
					sx={{
						backgroundColor: filter === "all" ? "#4F46E5" : "#F3F4F6",
						color: filter === "all" ? "white" : "#374151",
						fontWeight: 500,
						fontSize: "0.875rem",
						height: 38,
						px: 0.5,
						"&:hover": {
							backgroundColor: filter === "all" ? "#4338CA" : "#E5E7EB",
						},
						"& .MuiChip-icon": {
							color: filter === "all" ? "white" : "#6B7280",
						},
					}}
				/>
				<Chip
					icon={<WorkIcon sx={{ fontSize: 18 }} />}
					label="Work"
					clickable
					disabled={!availableCategories.has("work")}
					onClick={() => setFilter("work")}
					sx={{
						backgroundColor: filter === "work" ? "#4F46E5" : "#F3F4F6",
						color: filter === "work" ? "white" : "#374151",
						fontWeight: 500,
						fontSize: "0.875rem",
						height: 38,
						px: 0.5,
						"&:hover": {
							backgroundColor: filter === "work" ? "#4338CA" : "#E5E7EB",
						},
						"& .MuiChip-icon": {
							color: filter === "work" ? "white" : "#6B7280",
						},
					}}
				/>
				<Chip
					icon={<PersonIcon sx={{ fontSize: 18 }} />}
					label="Personal"
					clickable
					disabled={!availableCategories.has("personal")}
					onClick={() => setFilter("personal")}
					sx={{
						backgroundColor: filter === "personal" ? "#4F46E5" : "#F3F4F6",
						color: filter === "personal" ? "white" : "#374151",
						fontWeight: 500,
						fontSize: "0.875rem",
						height: 38,
						px: 0.5,
						"&:hover": {
							backgroundColor: filter === "personal" ? "#4338CA" : "#E5E7EB",
						},
						"& .MuiChip-icon": {
							color: filter === "personal" ? "white" : "#6B7280",
						},
					}}
				/>
				<Chip
					icon={<ShoppingCartIcon sx={{ fontSize: 18 }} />}
					label="Shopping"
					clickable
					disabled={!availableCategories.has("shopping")}
					onClick={() => setFilter("shopping")}
					sx={{
						backgroundColor: filter === "shopping" ? "#4F46E5" : "#F3F4F6",
						color: filter === "shopping" ? "white" : "#374151",
						fontWeight: 500,
						fontSize: "0.875rem",
						height: 38,
						px: 0.5,
						"&:hover": {
							backgroundColor: filter === "shopping" ? "#4338CA" : "#E5E7EB",
						},
						"& .MuiChip-icon": {
							color: filter === "shopping" ? "white" : "#6B7280",
						},
					}}
				/>
				<Chip
					icon={<LocalOfferIcon sx={{ fontSize: 18 }} />}
					label="Other"
					clickable
					disabled={!availableCategories.has("other")}
					onClick={() => setFilter("other")}
					sx={{
						backgroundColor: filter === "other" ? "#4F46E5" : "#F3F4F6",
						color: filter === "other" ? "white" : "#374151",
						fontWeight: 500,
						fontSize: "0.875rem",
						height: 38,
						px: 0.5,
						"&:hover": {
							backgroundColor: filter === "other" ? "#4338CA" : "#E5E7EB",
						},
						"& .MuiChip-icon": {
							color: filter === "other" ? "white" : "#6B7280",
						},
					}}
				/>
			</Stack>
		</Box>
	);
};
