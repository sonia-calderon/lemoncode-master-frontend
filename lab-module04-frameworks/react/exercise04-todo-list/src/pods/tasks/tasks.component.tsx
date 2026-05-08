import React from "react";
import {
	Box,
	Stack,
	Chip,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from "@mui/material";
import { Task } from "./task.vm";
import { ModalComponent } from "./components/modal.component";
import { NewTaskComponent } from "./components/newTask.component";
import { CategoriesComponent } from "./components/categories.component";
import { TaskItemComponent } from "./components/taskItem.component";

export const TasksComponent: React.FC = () => {
	const emptyTask: Task = {
		id: 0,
		name: "",
		description: "",
		priority: undefined,
		category: undefined,
	};
	const [activeTask, setActiveTask] = React.useState<Task | null>(null);
	const [allTasks, setAllTasks] = React.useState<Task[]>([]);
	const [taskName, setTaskName] = React.useState("");
	const [checked, setChecked] = React.useState<number[]>([]);
	const [filter, setFilter] = React.useState<Task["category"] | "all">("all");

	const openModal = (task?: Task) => {
		if (task) {
			setActiveTask({ ...task });
			return;
		}

		setActiveTask({ ...emptyTask, name: taskName });
	};
	const closeModal = () => setActiveTask(null);
	const handleInputChange = (field: keyof Task) => (e: any) => {
		const value = e.target ? e.target.value : e;
		setActiveTask((prev) => (prev ? { ...prev, [field]: value } : null));
	};
	const handleCategorySelection = (category: Task["category"]) => {
		setActiveTask((prev) => (prev ? { ...prev, category } : null));
	};
	const saveTask = (e: React.FormEvent) => {
		e.preventDefault();

		if (!activeTask) return;

		if (activeTask.id === 0) {
			// CREAR
			setAllTasks((prev) => [
				...prev,
				{
					...activeTask,
					id: Date.now(),
				},
			]);
		} else {
			// EDITAR
			setAllTasks((prev) =>
				prev.map((task) => (task.id === activeTask.id ? activeTask : task)),
			);
		}
		setTaskName("");

		closeModal();
	};
	const handleEdit = (id: Task["id"]) => {
		const taskToEdit = allTasks.find((task) => task.id === id);
		if (taskToEdit) {
			openModal(taskToEdit);
		}
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

	return (
		<Box sx={{ width: "100%", maxWidth: 800, mx: "auto", p: { xs: 2, sm: 3 } }}>
			{/* Modal */}
			{activeTask && (
				<ModalComponent
					task={activeTask}
					onCloseModal={closeModal}
					onSaveTask={saveTask}
					onInputChange={handleInputChange}
					onCategorySelection={handleCategorySelection}
				/>
			)}

			{/* Todo */}
			<Stack spacing={4}>
				{/* Add Task Section */}
				<NewTaskComponent
					taskName={taskName}
					onTaskNameChange={setTaskName}
					onOpenModal={openModal}
				/>

				{/* Categories Section */}
				<CategoriesComponent
					filter={filter}
					setFilter={setFilter}
					availableCategories={availableCategories}
				/>

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
								return (
									<TaskItemComponent
										task={task}
										checked={checked}
										handleEdit={handleEdit}
										handleItemChecked={handleItemChecked}
									/>
								);
							})}
						</List>
					)}
				</Box>
			</Stack>
		</Box>
	);
};
