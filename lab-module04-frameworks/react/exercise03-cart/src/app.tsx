import React from "react";
import { RouterComponent } from "@/core";
import "@/styles/normalize.css";
import "@/styles/styles.css";
import { CartProvider } from "./context/cart.context";

export const App = () => {
	return (
		<CartProvider>
			<RouterComponent />
		</CartProvider>
	);
};
