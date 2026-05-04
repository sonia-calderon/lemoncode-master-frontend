import React from "react";
import { books, Book } from "./products.data";
import { useCart } from "@/context/cart.context";

export const ProductComponent: React.FC = () => {
	const { addToCart, cart, removeFromCart, isAdded } = useCart();

	return (
		<>
			<div className="cartInfo">
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
			</div>
			<ul className="books">
				{books.map((book) => (
					<li key={book.id} className="book">
						<img src={book.cover} alt={book.title} />
						<p>{book.title}</p>
						<p>{book.author}</p>
						<p>{book.price.toFixed(2)}€</p>
						<button onClick={() => addToCart(book)} disabled={isAdded(book.id)}>
							Añadir al carrito
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
