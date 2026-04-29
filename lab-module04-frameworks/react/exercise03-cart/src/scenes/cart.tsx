import React from "react";
import { AppLayout } from "@/layouts";
import { CartContainer } from "@/pods/cart";

export const CartPage: React.FC = () => {
	return (
		<>
			<AppLayout>
				<p>Hola from cart page</p>
				<CartContainer />
			</AppLayout>
		</>
	);
};
