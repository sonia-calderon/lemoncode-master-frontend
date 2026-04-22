import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	detail: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	detail: "/character/:id",
};
