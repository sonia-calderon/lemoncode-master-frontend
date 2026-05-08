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
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface Task {
	id: number;
	name: string;
	description?: string;
	priority?: "low" | "medium" | "high" | undefined;
	category?: "work" | "personal" | "shopping" | "other" | undefined;
}

export const TasksComponent: React.FC = () => {
	const [task, setTask] = React.useState<Task>({
		id: 0,
		name: "",
		description: "",
		priority: undefined,
		category: undefined,
	});
	const [allTasks, setAllTasks] = React.useState<Task[]>([]);
	const [isOpen, setIsOpen] = React.useState(false);
	const [isEditOpen, setIsEditOpen] = React.useState(false);
	const [checked, setChecked] = React.useState<number[]>([]);
	const [filter, setFilter] = React.useState<Task["category"] | "all">("all");
	const [editTask, setEditTask] = React.useState<Task>({
		id: 0,
		name: "",
		description: "",
		priority: undefined,
		category: undefined,
	});

	const openNewModal = () => setIsOpen(true);
	const closeNewModal = () => {
		setIsOpen(false);
		setTask({
			id: 0,
			name: "",
			description: "",
			priority: undefined,
			category: undefined,
		});
	};
	const openEditModal = () => setIsEditOpen(true);
	const closeEditModal = () => {
		setIsEditOpen(false);

		setEditTask({
			id: 0,
			name: "",
			description: "",
			priority: undefined,
			category: undefined,
		});
	};

	const saveNewTask = (e: React.FormEvent) => {
		e.preventDefault();

		// Creamos una copia de la tarea con un ID único final
		const taskWithId = {
			...task,
			id: Date.now(), // Genera un ID único basado en el tiempo
		};

		setAllTasks((prev) => [...prev, taskWithId]);

		closeNewModal();
	};

	const saveEditedTask = (e: React.FormEvent) => {
		e.preventDefault();

		setAllTasks((prev) =>
			prev.map((t) => (t.id === editTask.id ? editTask : t)),
		);

		closeEditModal();
	};

	const handleTextChange = (e) => {
		setTask((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};

	const handleInputChange = (name: string) => (e) => {
		// Si es ToggleButtonGroup, el valor viene directo, si es TextField viene de e.target.value
		const value = e.target ? e.target.value : e;
		setTask((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleEditInputChange = (name: string) => (e) => {
		const value = e.target ? e.target.value : e;
		setEditTask((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCategorySelection = (category: Task["category"]) => {
		setTask((prev) => ({
			...prev,
			category: category,
		}));
	};

	// Nueva función para manejar la categoría en el modal de EDITAR
	const handleEditCategorySelection = (category: Task["category"]) => {
		setEditTask((prev) => ({
			...prev,
			category: category,
		}));
	};

	const handleItemChecked = (value: number) => (e) => {
		e.stopPropagation();
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const filteredTasks = allTasks.filter((task) => {
		if (filter === "all") return true;
		return task.category === filter;
	});

	const availableCategories = React.useMemo(() => {
		const categories = new Set<Task["category"]>();
		allTasks.forEach((task) => {
			if (task.category) {
				categories.add(task.category);
			}
		});
		return categories;
	}, [allTasks]);

	const handleEdit = (id: Task["id"]) => {
		const taskToEdit = allTasks.find((task) => task.id === id);
		if (taskToEdit) {
			setEditTask({ ...taskToEdit }); // Copia de la tarea
			openEditModal();
		}
	};

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

	return (
		<Box sx={{ width: "100%", maxWidth: 800, mx: "auto", p: { xs: 2, sm: 3 } }}>
			{/* Modal */}
			<Modal
				open={isOpen}
				onClose={closeNewModal}
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
					onSubmit={saveNewTask}
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

						<IconButton onClick={closeNewModal} size="small">
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
								onChange={handleInputChange("name")}
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
								onChange={handleInputChange("description")}
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
								onChange={handleInputChange("priority")}
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
									onClick={() => handleCategorySelection("work")}
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
									onClick={() => handleCategorySelection("personal")}
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
									onClick={() => handleCategorySelection("shopping")}
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
									onClick={() => handleCategorySelection("other")}
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
							onClick={closeNewModal}
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
			{/* Modal Edit */}
			{editTask && (
				<Modal
					open={isEditOpen}
					onClose={closeEditModal}
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
						onSubmit={saveEditedTask}
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
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, color: "#0F172A" }}
							>
								Edit Task
							</Typography>

							<IconButton onClick={closeEditModal} size="small">
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
									value={editTask.name}
									onChange={handleEditInputChange("name")}
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
									value={editTask.description}
									onChange={handleEditInputChange("description")}
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
									value={editTask.priority}
									exclusive
									onChange={handleEditInputChange("priority")}
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
										onClick={() => handleEditCategorySelection("work")}
										sx={{
											backgroundColor:
												editTask.category === "work" ? "#4F46E5" : "#F3F4F6",
											color: editTask.category === "work" ? "white" : "#6B7280",
											fontWeight: 500,
											px: 0.5,
											"&:hover": {
												backgroundColor:
													editTask.category === "work" ? "#4338CA" : "#E5E7EB",
											},
											"& .MuiChip-icon": {
												color:
													editTask.category === "work" ? "white" : "#6B7280",
											},
										}}
									/>
									<Chip
										icon={<PersonIcon sx={{ fontSize: 18 }} />}
										label="Personal"
										clickable
										onClick={() => handleEditCategorySelection("personal")}
										sx={{
											backgroundColor:
												editTask.category === "personal"
													? "#4F46E5"
													: "#F3F4F6",
											color:
												editTask.category === "personal" ? "white" : "#6B7280",
											fontWeight: 500,
											px: 0.5,
											"&:hover": {
												backgroundColor:
													editTask.category === "personal"
														? "#4338CA"
														: "#E5E7EB",
											},
											"& .MuiChip-icon": {
												color:
													editTask.category === "personal"
														? "white"
														: "#6B7280",
											},
										}}
									/>
									<Chip
										icon={<ShoppingCartIcon sx={{ fontSize: 18 }} />}
										label="Shopping"
										clickable
										onClick={() => handleEditCategorySelection("shopping")}
										sx={{
											backgroundColor:
												editTask.category === "shopping"
													? "#4F46E5"
													: "#F3F4F6",
											color:
												editTask.category === "shopping" ? "white" : "#6B7280",
											fontWeight: 500,
											px: 0.5,
											"&:hover": {
												backgroundColor:
													editTask.category === "shopping"
														? "#4338CA"
														: "#E5E7EB",
											},
											"& .MuiChip-icon": {
												color:
													editTask.category === "shopping"
														? "white"
														: "#6B7280",
											},
										}}
									/>
									<Chip
										icon={<LocalOfferIcon sx={{ fontSize: 18 }} />}
										label="Other"
										clickable
										onClick={() => handleEditCategorySelection("other")}
										sx={{
											backgroundColor:
												editTask.category === "other" ? "#4F46E5" : "#F3F4F6",
											color:
												editTask.category === "other" ? "white" : "#6B7280",
											fontWeight: 500,
											px: 0.5,
											"&:hover": {
												backgroundColor:
													editTask.category === "other" ? "#4338CA" : "#E5E7EB",
											},
											"& .MuiChip-icon": {
												color:
													editTask.category === "other" ? "white" : "#6B7280",
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
								onClick={closeEditModal}
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
								Edit Task
							</Button>
						</Stack>
					</Box>
				</Modal>
			)}

			{/* Todo */}
			<Stack spacing={4}>
				{/* Search and Add Task Section */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						backgroundColor: "white",
						borderRadius: 3,
						p: 0,

						boxShadow:
							"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
					}}
				>
					<TextField
						fullWidth
						variant="standard"
						placeholder="What needs to be done?"
						onChange={handleTextChange}
						value={task.name}
						sx={{
							px: 3,
							py: 2,
							"& .MuiInput-root": {
								fontSize: "1rem",
								"&:before": {
									borderBottom: "none",
								},
								"&:after": {
									borderBottom: "none",
								},
								"&:hover:not(.Mui-disabled):before": {
									borderBottom: "none",
								},
							},
							"& .MuiInputBase-input::placeholder": {
								color: "#9CA3AF",
								opacity: 1,
							},
						}}
					/>
					<Button
						variant="contained"
						onClick={openNewModal}
						sx={{
							backgroundColor: "#4F46E5",
							textTransform: "none",
							fontWeight: 600,
							boxShadow: "none",
							px: 3,
							py: 1.2,
							marginRight: 2,
							whiteSpace: "nowrap",
							borderRadius: 2,
							"&:hover": {
								backgroundColor: "#4338CA",
								boxShadow: "none",
							},
						}}
					>
						Add Task
					</Button>
				</Box>

				{/* Categories Section */}
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
									backgroundColor:
										filter === "personal" ? "#4338CA" : "#E5E7EB",
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
									backgroundColor:
										filter === "shopping" ? "#4338CA" : "#E5E7EB",
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

				{/* Tasks List Section */}
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
						Active Tasks
					</Typography>

					{allTasks.length === 0 && (
						<Typography variant="body1">There are no active tasks</Typography>
					)}

					{allTasks.length > 0 && (
						<List sx={{ p: 0 }}>
							{filteredTasks.map((task) => {
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
												{/* Category Chip arriba si existe */}
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
																textDecoration: isItemSelected
																	? "line-through"
																	: "none",
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
																	textDecoration: isItemSelected
																		? "line-through"
																		: "none",
																}}
															>
																{task.description}
															</Typography>
														)
													}
												/>
											</Box>
											{/* Priority Chip a la derecha solo si existe */}
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
							})}
						</List>
					)}
				</Box>
			</Stack>
		</Box>
	);
};
