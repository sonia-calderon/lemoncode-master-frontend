import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Task } from "../task.vm";

interface Props {
	taskName: string;
	onTaskNameChange: (value: string) => void;
	onOpenModal: (task?: Task) => void;
}

export const NewTaskComponent: React.FC<Props> = (props) => {
	const { taskName, onTaskNameChange, onOpenModal } = props;

	return (
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
				onChange={(e) => onTaskNameChange(e.target.value)}
				value={taskName}
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
				onClick={() => onOpenModal()}
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
	);
};
