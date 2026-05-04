import React from "react";
import { useCart } from "@/context/cart.context";

export const CartComponent: React.FC = () => {
	const { cart, removeFromCart } = useCart();
	return (
		<>
			<p>Libro añadido</p>
			{cart.map((addedBook) => (
				<div key={addedBook.id}>
					<p>{addedBook.title}</p>
					<p>{addedBook.price}</p>
					<button onClick={(e) => removeFromCart(addedBook)}>Eliminar</button>
				</div>
			))}
			<p>
				Total:{" "}
				{cart
					.reduce((acc, currentValue) => acc + currentValue.price, 0)
					.toFixed(2)}
				€
			</p>
		</>
	);
};
