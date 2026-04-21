import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { ListPage, DetailPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<ListPage />} />
				<Route path={switchRoutes.list} element={<ListPage />} />
				<Route path={switchRoutes.details} element={<DetailPage />} />
			</Routes>
		</Router>
	);
};
