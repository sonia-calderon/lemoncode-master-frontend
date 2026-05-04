import React from "react";
import { AppLayout } from "@/layouts";
import { CartContainer } from "@/pods/cart";

export const CartPage: React.FC = () => {
	return (
		<>
			<AppLayout>
				<CartContainer />
			</AppLayout>
		</>
	);
};
