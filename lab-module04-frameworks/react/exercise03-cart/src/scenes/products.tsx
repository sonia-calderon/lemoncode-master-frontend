import React from "react";
import { AppLayout } from "@/layouts";
import { ProductContainer } from "@/pods/products";

export const ProductsPage: React.FC = () => {
	return (
		<>
			<AppLayout>
				<p>Hola from products page</p>
				<ProductContainer />
			</AppLayout>
		</>
	);
};
