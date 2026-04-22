import { generatePath } from "react-router-dom";
import { switchRoutes } from "../router/routes";

interface SwitchRoutes {
	root: string;
	detail: string;
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
	detail: (id: number) => string;
}

export const routes: Routes = {
	...switchRoutes,
	detail: (id) => generatePath(switchRoutes.detail, { id }),
};
