import { generatePath } from "react-router-dom";
import { switchRoutes } from "../router/routes";

interface SwitchRoutes {
	root: string;
	list: string;
	details: string;
}

interface Routes extends Omit<SwitchRoutes, "list" | "details"> {
	list: (org: string) => string;
	details: (org: string, id: string) => string;
}

export const routes: Routes = {
	...switchRoutes,
	list: (org) => generatePath(switchRoutes.list, { org }),
	details: (org, id) => generatePath(switchRoutes.details, { org, id }),
};
