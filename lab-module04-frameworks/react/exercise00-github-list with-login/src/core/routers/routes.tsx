import { generatePath } from "react-router-dom";
import { switchRoutes } from "../router/routes";

interface SwitchRoutes {
	root: string;
	list: string;
	details: string;
}

interface Routes extends Omit<SwitchRoutes, "details"> {
	details: (id: string) => string;
}

export const routes: Routes = {
	...switchRoutes,
	details: (id) => generatePath(switchRoutes.details, { id }),
};
