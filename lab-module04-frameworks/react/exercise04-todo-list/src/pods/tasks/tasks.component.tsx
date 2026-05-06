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

interface Tasks {
	name: string;
	description?: string;
	priority?: "low" | "medium" | "high" | undefined;
	category?: "work" | "personal" | "shopping" | "other" | undefined;
}

export const TasksComponent: React.FC = () => {
	const [task, setTask] = React.useState<Tasks>({
		name: "",
		description: "",
	});
	const [allTasks, setAllTasks] = React.useState<Tasks[]>([]);
	const [isOpen, setIsOpen] = React.useState(false);

	const openNewTask = () => {
		setIsOpen(true);
	};

	const closeNewTask = () => {
		setIsOpen(false);
		console.log(allTasks);
	};

	const createNewTask = (e) => {
		e.preventDefault();

		setAllTasks((prev) => {
			return [...prev, task];
		});
		closeNewTask();
	};

	const handleChange = (name: string) => (e) => {
		setTask((prev) => ({
			...prev,
			[name]: e.target.value,
		}));
	};

	const handleChipClick = (category: string) => {
		setTask((prev) => ({
			...prev,
			category: category,
		}));
	};

	return (
		<>
			<div className={`todo-modal ${isOpen ? "active" : ""}`}>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
						"& .MuiTextField-root": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<div className="todo-modal__header">
						<Typography variant="h4" gutterBottom>
							Create New Task
						</Typography>

						<CloseIcon onClick={closeNewTask} />
					</div>
					<div className="todo-modal__content">
						<TextField
							id="filled-basic"
							label="Task Title"
							variant="filled"
							value={task.name}
							onChange={handleChange("name")}
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
							onChange={handleChange("description")}
						/>

						<Typography variant="h6" gutterBottom>
							Priority
						</Typography>

						<ToggleButtonGroup
							color="primary"
							value={task.priority}
							exclusive
							onChange={handleChange("priority")}
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
								onClick={() => handleChipClick("work")}
								color={task.category === "work" ? "primary" : "default"}
							/>
							<Chip
								icon={<PersonIcon />}
								label="Personal"
								onClick={() => handleChipClick("personal")}
								color={task.category === "personal" ? "primary" : "default"}
							/>
							<Chip
								icon={<ShoppingCartIcon />}
								label="Shopping"
								onClick={() => handleChipClick("shopping")}
								color={task.category === "shopping" ? "primary" : "default"}
							/>
							<Chip
								icon={<LocalOfferIcon />}
								label="Other"
								onClick={() => handleChipClick("other")}
								color={task.category === "other" ? "primary" : "default"}
							/>
						</Stack>
					</div>
					<Stack className="todo-modal__btns" spacing={2} direction="row">
						<Button variant="text" onClick={closeNewTask}>
							Cancel
						</Button>
						<Button variant="contained" onClick={createNewTask}>
							Save Task
						</Button>
					</Stack>
				</Box>
			</div>
			<div className="todo">
				<div className="todo__search">
					<input type="text" placeholder="What needs to be done?" />
					<button onClick={openNewTask}>Add Task</button>
				</div>
				<div className="todo__content">
					<div className="todo__categories">
						<h3>Categories</h3>
						<div className="todo__categories-labels">
							<button>
								<FormatListBulletedIcon />
								<span>All tasks</span>
							</button>
							{/* aquí irán las categorías que estén presentes en la lista */}
						</div>
					</div>
					<div className="todo__list">
						<h3>Tasks</h3>
						<div className="todo__list-tasks">
							{allTasks.map((task) => (
								<div className="todo__list-task">
									<input type="checkbox" name="" id="" />
									<p>{task.name}</p>
									<p>{task.description}</p>
									<span>{task.priority}</span>
									<span>{task.category}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
