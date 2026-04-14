import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	list: string;
	details: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	list: "/list/:org",
	details: "/detail/:org/:id",
};
