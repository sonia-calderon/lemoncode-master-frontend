import React from "react";
import { AppLayout } from "@/layouts";
import { TasksContainer } from "@/pods/tasks";

export const TasksPage: React.FC = () => {
	return (
		<>
			<AppLayout>
				<TasksContainer />
			</AppLayout>
		</>
	);
};
