import React from "react";
import {
	IconButton,
	Box,
	TextField,
	Stack,
	Button,
	Chip,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
	Modal,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Task } from "../task.vm";

interface Props {
	task: Task;
	onCloseModal: () => void;
	onSaveTask: (e: React.FormEvent) => void;
	onInputChange: (field: keyof Task) => (e: any) => void;
	onCategorySelection: (category: Task["category"]) => void;
}

export const ModalComponent: React.FC<Props> = (props) => {
	const { task, onCloseModal, onSaveTask, onInputChange, onCategorySelection } =
		props;

	return (
		<Modal
			open={Boolean(task)}
			onClose={onCloseModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				component="form"
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "column",
					width: 560,
					maxWidth: "90vw",
					bgcolor: "white",
					borderRadius: 3,
					boxShadow:
						"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					p: 0,
				}}
				noValidate
				autoComplete="off"
				onSubmit={onSaveTask}
			>
				{/* Modal Header */}
				<Stack
					direction="row"
					sx={{
						alignItems: "center",
						justifyContent: "space-between",
						borderBottom: "1px solid #E5E7EB",
						px: 3,
						py: 2.5,
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: 600, color: "#0F172A" }}>
						Create New Task
					</Typography>

					<IconButton onClick={onCloseModal} size="small">
						<CloseIcon />
					</IconButton>
				</Stack>
				{/* Modal Content */}
				<Stack spacing={3} sx={{ px: 3, py: 3 }}>
					{/* Task Title */}
					<Box>
						<Typography
							variant="body2"
							sx={{ mb: 1, fontWeight: 500, color: "#374151" }}
						>
							Task Title
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							value={task.name}
							onChange={onInputChange("name")}
							placeholder="e.g., Grocery shopping"
							sx={{
								"& .MuiOutlinedInput-root": {
									backgroundColor: "#F9FAFB",
									borderRadius: 2,
									"& fieldset": {
										borderColor: "#E5E7EB",
									},
									"&:hover fieldset": {
										borderColor: "#D1D5DB",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#4F46E5",
									},
								},
							}}
						/>
					</Box>

					{/* Description */}
					<Box>
						<Typography
							variant="body2"
							sx={{ mb: 1, fontWeight: 500, color: "#374151" }}
						>
							Description (Optional)
						</Typography>
						<TextField
							fullWidth
							multiline
							rows={3}
							variant="outlined"
							value={task.description}
							onChange={onInputChange("description")}
							placeholder="Add more details..."
							sx={{
								"& .MuiOutlinedInput-root": {
									backgroundColor: "#F9FAFB",
									borderRadius: 2,
									"& fieldset": {
										borderColor: "#E5E7EB",
									},
									"&:hover fieldset": {
										borderColor: "#D1D5DB",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#4F46E5",
									},
								},
							}}
						/>
					</Box>

					{/* Priority */}
					<Box>
						<Typography
							variant="body2"
							sx={{ mb: 1, fontWeight: 500, color: "#374151" }}
						>
							Priority
						</Typography>

						<ToggleButtonGroup
							color="primary"
							value={task.priority}
							exclusive
							onChange={onInputChange("priority")}
							fullWidth
							sx={{
								"& .MuiToggleButton-root": {
									textTransform: "uppercase",
									fontSize: "0.75rem",
									fontWeight: 600,
									color: "#6B7280",
									"&.Mui-selected": {
										backgroundColor: "#EEF2FF",
										color: "#4F46E5",
										borderColor: "#4F46E5",
										"&:hover": {
											backgroundColor: "#E0E7FF",
										},
									},
								},
							}}
						>
							<ToggleButton value="low">Low</ToggleButton>
							<ToggleButton value="medium">Med</ToggleButton>
							<ToggleButton value="high">High</ToggleButton>
						</ToggleButtonGroup>
					</Box>

					{/* Category */}
					<Box>
						<Typography
							variant="body2"
							sx={{ mb: 1.5, fontWeight: 500, color: "#374151" }}
						>
							Category
						</Typography>

						<Stack sx={{ gap: 1, flexDirection: "row", flexWrap: "wrap" }}>
							<Chip
								icon={<WorkIcon sx={{ fontSize: 18 }} />}
								label="Work"
								clickable
								onClick={() => onCategorySelection("work")}
								sx={{
									backgroundColor:
										task.category === "work" ? "#4F46E5" : "#F3F4F6",
									color: task.category === "work" ? "white" : "#6B7280",
									fontWeight: 500,
									px: 0.5,
									"&:hover": {
										backgroundColor:
											task.category === "work" ? "#4338CA" : "#E5E7EB",
									},
									"& .MuiChip-icon": {
										color: task.category === "work" ? "white" : "#6B7280",
									},
								}}
							/>
							<Chip
								icon={<PersonIcon sx={{ fontSize: 18 }} />}
								label="Personal"
								clickable
								onClick={() => onCategorySelection("personal")}
								sx={{
									backgroundColor:
										task.category === "personal" ? "#4F46E5" : "#F3F4F6",
									color: task.category === "personal" ? "white" : "#6B7280",
									fontWeight: 500,
									px: 0.5,
									"&:hover": {
										backgroundColor:
											task.category === "personal" ? "#4338CA" : "#E5E7EB",
									},
									"& .MuiChip-icon": {
										color: task.category === "personal" ? "white" : "#6B7280",
									},
								}}
							/>
							<Chip
								icon={<ShoppingCartIcon sx={{ fontSize: 18 }} />}
								label="Shopping"
								clickable
								onClick={() => onCategorySelection("shopping")}
								sx={{
									backgroundColor:
										task.category === "shopping" ? "#4F46E5" : "#F3F4F6",
									color: task.category === "shopping" ? "white" : "#6B7280",
									fontWeight: 500,
									px: 0.5,
									"&:hover": {
										backgroundColor:
											task.category === "shopping" ? "#4338CA" : "#E5E7EB",
									},
									"& .MuiChip-icon": {
										color: task.category === "shopping" ? "white" : "#6B7280",
									},
								}}
							/>
							<Chip
								icon={<LocalOfferIcon sx={{ fontSize: 18 }} />}
								label="Other"
								clickable
								onClick={() => onCategorySelection("other")}
								sx={{
									backgroundColor:
										task.category === "other" ? "#4F46E5" : "#F3F4F6",
									color: task.category === "other" ? "white" : "#6B7280",
									fontWeight: 500,
									px: 0.5,
									"&:hover": {
										backgroundColor:
											task.category === "other" ? "#4338CA" : "#E5E7EB",
									},
									"& .MuiChip-icon": {
										color: task.category === "other" ? "white" : "#6B7280",
									},
								}}
							/>
						</Stack>
					</Box>
				</Stack>

				{/* Modal Footer */}
				<Stack
					spacing={2}
					direction="row"
					sx={{
						borderTop: "1px solid #E5E7EB",
						px: 3,
						py: 2.5,
						justifyContent: "flex-end",
					}}
				>
					<Button
						variant="text"
						onClick={onCloseModal}
						sx={{
							color: "#6B7280",
							textTransform: "none",
							fontWeight: 500,
							"&:hover": {
								backgroundColor: "#F3F4F6",
							},
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						type="submit"
						sx={{
							backgroundColor: "#4F46E5",
							textTransform: "none",
							fontWeight: 600,
							boxShadow: "none",
							px: 3,
							"&:hover": {
								backgroundColor: "#4338CA",
								boxShadow: "none",
							},
						}}
					>
						Save Task
					</Button>
				</Stack>
			</Box>
		</Modal>
	);
};
