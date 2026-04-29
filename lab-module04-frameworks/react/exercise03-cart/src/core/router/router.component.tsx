import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { ProductsPage, CartPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<ProductsPage />} />
				<Route path={switchRoutes.cart} element={<CartPage />} />
			</Routes>
		</Router>
	);
};
