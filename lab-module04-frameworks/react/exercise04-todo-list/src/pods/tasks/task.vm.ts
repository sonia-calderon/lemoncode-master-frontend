export interface Task {
	id: number;
	name: string;
	description?: string;
	priority?: "low" | "medium" | "high" | undefined;
	category?: "work" | "personal" | "shopping" | "other" | undefined;
}
