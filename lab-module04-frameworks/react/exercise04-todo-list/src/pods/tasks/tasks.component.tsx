import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const MainInput = styled(InputBase)(({ theme }) => ({
	"label + &": {
		marginTop: theme.spacing(3),
	},
	"& .MuiInputBase-input": {
		borderRadius: 4,
		position: "relative",
		backgroundColor: "#F3F6F9",
		border: "1px solid",
		borderColor: "#E0E3E7",
		fontSize: 16,
		width: "auto",
		padding: "10px 12px",
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main,
		},
		...theme.applyStyles("dark", {
			backgroundColor: "#1A2027",
			borderColor: "#2D3843",
		}),
	},
}));

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
		priority: "low",
		category: "work",
	});
	const [allTasks, setAllTasks] = React.useState<Task[]>([]);
	const [isOpen, setIsOpen] = React.useState(false);
	const [checked, setChecked] = React.useState([0]);
	const [filter, setFilter] = React.useState<Task["category"] | "all">("all");

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const saveNewTask = (e: React.FormEvent) => {
		e.preventDefault();

		// Creamos una copia de la tarea con un ID único final
		const taskWithId = {
			...task,
			id: Date.now(), // Genera un ID único basado en el tiempo
		};

		setAllTasks((prev) => [...prev, taskWithId]);

		// Limpia el formulario para la siguiente tarea
		setTask({
			id: 0,
			name: "",
			description: "",
			priority: "low",
			category: "work",
		});

		handleClose();
	};

	const handleInputChange = (name: string) => (e) => {
		// Si es ToggleButtonGroup, el valor viene directo, si es TextField viene de e.target.value
		const value = e.target ? e.target.value : e;
		setTask((prev) => ({
			...prev,
			[name]: e.target.value,
		}));
	};

	const handleCategorySelection = (category: Task["category"]) => {
		setTask((prev) => ({
			...prev,
			category: category,
		}));
	};

	const handleItemChecked = (value: number) => () => {
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

	const handleEdit = () => {
		console.log("edit");
	};

	return (
		<>
			{/* Modal */}
			<Modal
				open={isOpen}
				onClose={handleClose}
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
						width: 500,
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
						gap: "24px",
					}}
					noValidate
					autoComplete="off"
				>
					<Stack
						direction="row"
						spacing={1}
						sx={{
							alignItems: "center",
							justifyContent: "space-between",
							borderBottom: "1px solid #000",
						}}
					>
						<Typography variant="h4" gutterBottom>
							Create New Task
						</Typography>

						<CloseIcon onClick={handleClose} />
					</Stack>
					<Stack
						className="todo-modal__content"
						sx={{ display: "flex", flexDirection: "column" }}
					>
						<TextField
							id="filled-basic"
							label="Task Title"
							variant="filled"
							value={task.name}
							onChange={handleInputChange("name")}
							placeholder="e.g., Grocery shopping"
						/>

						<TextField
							id="filled-multiline-static"
							label="Description (Optional)"
							multiline
							rows={4}
							defaultValue="Add more details"
							variant="filled"
							value={task.description}
							onChange={handleInputChange("description")}
						/>

						<Typography variant="h6" gutterBottom>
							Priority
						</Typography>

						<ToggleButtonGroup
							color="primary"
							value={task.priority}
							exclusive
							onChange={handleInputChange("priority")}
							aria-label="Platform"
						>
							<ToggleButton value="low">Low</ToggleButton>
							<ToggleButton value="med">Med</ToggleButton>
							<ToggleButton value="high">High</ToggleButton>
						</ToggleButtonGroup>

						<Typography variant="h6" gutterBottom>
							Category
						</Typography>

						<Stack direction="row" spacing={1}>
							<Chip
								icon={<WorkIcon />}
								label="Work"
								clickable
								onClick={() => handleCategorySelection("work")}
								color={task.category === "work" ? "primary" : "default"}
							/>
							<Chip
								icon={<PersonIcon />}
								label="Personal"
								onClick={() => handleCategorySelection("personal")}
								color={task.category === "personal" ? "primary" : "default"}
							/>
							<Chip
								icon={<ShoppingCartIcon />}
								label="Shopping"
								onClick={() => handleCategorySelection("shopping")}
								color={task.category === "shopping" ? "primary" : "default"}
							/>
							<Chip
								icon={<LocalOfferIcon />}
								label="Other"
								onClick={() => handleCategorySelection("other")}
								color={task.category === "other" ? "primary" : "default"}
							/>
						</Stack>
					</Stack>
					<Stack className="todo-modal__btns" spacing={2} direction="row">
						<Button variant="text" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="contained" onClick={saveNewTask}>
							Save Task
						</Button>
					</Stack>
				</Box>
			</Modal>
			{/* Todo */}
			<div className="todo">
				<div className="todo__search">
					<MainInput defaultValue="What needs to be done?" />
					<Button variant="contained" onClick={handleOpen}>
						Add Task
					</Button>
				</div>
				<div className="todo__content">
					<div className="todo__categories">
						<Typography variant="h5" gutterBottom>
							Categories
						</Typography>

						<Stack direction="row" spacing={1}>
							<Chip
								icon={<FormatListBulletedIcon />}
								label="All tasks"
								clickable
								onClick={() => setFilter("all")}
							/>
							<Chip
								icon={<WorkIcon />}
								label="Work"
								clickable
								onClick={() => setFilter("work")}
							/>
							<Chip
								icon={<PersonIcon />}
								label="Personal"
								clickable
								onClick={() => setFilter("personal")}
							/>
							<Chip
								icon={<ShoppingCartIcon />}
								label="Shopping"
								clickable
								onClick={() => setFilter("shopping")}
							/>
							<Chip
								icon={<LocalOfferIcon />}
								label="Other"
								clickable
								onClick={() => setFilter("other")}
							/>
						</Stack>
					</div>
					<div className="todo__list">
						<Typography variant="h5" gutterBottom>
							Tasks
						</Typography>

						<List>
							{filteredTasks.map((task) => {
								// Si el índice es distinto de -1, significa que el ID existe en el array
								const isItemSelected = checked.indexOf(task.id) !== -1;
								return (
									<ListItem
										key={task.id}
										disablePadding
										sx={{
											backgroundColor: isItemSelected ? "gray" : "",
										}}
									>
										<ListItemButton role={undefined} dense>
											<ListItemIcon>
												<Checkbox
													onClick={handleItemChecked(task.id)}
													edge="start"
													checked={isItemSelected}
													tabIndex={-1}
													disableRipple
													slotProps={{
														input: {
															"aria-labelledby": `checkbox-list-label-${task.id}`,
														},
													}}
												/>
											</ListItemIcon>
											<ListItemText
												id={`checkbox-list-label-${task.id}`}
												primary={task.name}
												secondary={
													<Typography
														component="span"
														variant="body2"
														sx={{ color: "text.primary", display: "inline" }}
													>
														{task.description}
													</Typography>
												}
											/>
											<ListItemText
												id={`checkbox-list-label-${task.id}`}
												primary={task.priority}
											/>
											<ListItemText
												id={`checkbox-list-label-${task.id}`}
												primary={task.category}
											/>
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</div>
				</div>
			</div>
		</>
	);
};
