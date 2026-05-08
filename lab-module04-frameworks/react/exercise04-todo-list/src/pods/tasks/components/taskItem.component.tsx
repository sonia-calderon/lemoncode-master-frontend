import React from "react";
import {
	Box,
	TextField,
	Stack,
	Button,
	Chip,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Task } from "../task.vm";

interface Props {
	task: Task;
	checked: number[];
	handleItemChecked: (value: number) => (e) => void;
	handleEdit: (id: Task["id"]) => void;
}

export const TaskItemComponent: React.FC<Props> = (props) => {
	const { task, checked, handleItemChecked, handleEdit } = props;

	const getPriorityColor = (priority: string | undefined) => {
		switch (priority) {
			case "high":
				return "#FEE2E2";
			case "medium":
				return "#FEF3C7";
			case "low":
				return "#DBEAFE";
			default:
				return "#F3F4F6";
		}
	};

	const getPriorityTextColor = (priority: string | undefined) => {
		switch (priority) {
			case "high":
				return "#991B1B";
			case "medium":
				return "#92400E";
			case "low":
				return "#1E40AF";
			default:
				return "#374151";
		}
	};
	// Si el índice es distinto de -1, significa que el ID existe en el array
	const isItemSelected = checked.indexOf(task.id) !== -1;
	// Función para obtener el icono de categoría
	const getCategoryIcon = (category: Task["category"]) => {
		switch (category) {
			case "work":
				return <WorkIcon sx={{ fontSize: 16 }} />;
			case "personal":
				return <PersonIcon sx={{ fontSize: 16 }} />;
			case "shopping":
				return <ShoppingCartIcon sx={{ fontSize: 16 }} />;
			case "other":
				return <LocalOfferIcon sx={{ fontSize: 16 }} />;
			default:
				return <LocalOfferIcon sx={{ fontSize: 16 }} />;
		}
	};

	// Función para capitalizar la primera letra
	const capitalize = (str: string | undefined) => {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	return (
		<ListItem
			key={task.id}
			disablePadding
			sx={{
				mb: 1.5,
				backgroundColor: "white",
				borderRadius: 2,
				boxShadow:
					"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				"&:hover": {
					boxShadow:
						"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				},
			}}
		>
			<ListItemButton
				onClick={() => handleEdit(task.id)}
				sx={{
					py: 2,
					px: 2.5,
					opacity: isItemSelected ? 0.6 : 1,
					borderRadius: 2,
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.02)",
					},
				}}
			>
				<ListItemIcon sx={{ minWidth: 40 }}>
					<Checkbox
						onClick={(e) => e.stopPropagation()}
						onChange={handleItemChecked(task.id)}
						edge="start"
						checked={isItemSelected}
						tabIndex={-1}
						disableRipple
						sx={{
							color: "#D1D5DB",
							"&.Mui-checked": {
								color: "#10B981",
							},
						}}
					/>
				</ListItemIcon>
				<Box sx={{ flex: 1 }}>
					{/* Category Chip */}
					{task.category && (
						<Chip
							icon={getCategoryIcon(task.category)}
							label={capitalize(task.category)}
							size="small"
							sx={{
								backgroundColor: "#F3F4F6",
								color: "#374151",
								fontWeight: 500,
								fontSize: "0.75rem",
								height: 24,
								border: "none",
								mb: 0.5,
								"& .MuiChip-icon": {
									color: "#6B7280",
								},
							}}
						/>
					)}
					<ListItemText
						primary={
							<Typography
								sx={{
									fontWeight: 500,
									color: "#0F172A",
									fontSize: "1rem",
									mb: task.description ? 0.5 : 0,
									textDecoration: isItemSelected ? "line-through" : "none",
								}}
							>
								{task.name}
							</Typography>
						}
						secondary={
							task.description && (
								<Typography
									component="span"
									variant="body2"
									sx={{
										color: "#6B7280",
										fontSize: "0.875rem",
										textDecoration: isItemSelected ? "line-through" : "none",
									}}
								>
									{task.description}
								</Typography>
							)
						}
					/>
				</Box>
				{/* Priority Chip */}
				{task.priority && (
					<Box sx={{ ml: 2 }}>
						<Chip
							label={task.priority.toUpperCase()}
							size="small"
							sx={{
								backgroundColor: getPriorityColor(task.priority),
								color: getPriorityTextColor(task.priority),
								fontWeight: 600,
								fontSize: "0.75rem",
								height: 28,
								border: "none",
								minWidth: 70,
							}}
						/>
					</Box>
				)}
			</ListItemButton>
		</ListItem>
	);
};
