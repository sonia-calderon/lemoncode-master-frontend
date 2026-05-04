import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { books, Book } from "./products.data";
import { useCart } from "@/context/cart.context";
import { switchRoutes } from "@/core/router/routes";
import DeleteIcon from "@/assets/icons/delete-svgrepo-com.svg";

export const ProductComponent: React.FC = () => {
	const { addToCart, cart, removeFromCart, isAdded } = useCart();
	const [showCartAside, setShowCartAside] = useState(false);

	// Función para añadir al carrito y mostrar el aside
	const handleAddToCart = (book: Book) => {
		addToCart(book);
		setShowCartAside(true);
	};

	// Cerrar el aside
	const closeAside = () => {
		setShowCartAside(false);
	};

	// Cerrar al hacer click en el overlay
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			closeAside();
		}
	};

	return (
		<>
			{/* Lista de libros */}
			<ul className="books">
				{books.map((book) => (
					<li key={book.id} className="book">
						<img src={book.cover} alt={book.title} />
						<p>{book.title}</p>
						<p>{book.author}</p>
						<p>{book.price.toFixed(2).replace(".", ",")}€</p>
						<button
							onClick={() => handleAddToCart(book)}
							disabled={isAdded(book.id)}
						>
							{isAdded(book.id) ? "Añadido" : "Añadir al carrito"}
						</button>
					</li>
				))}
			</ul>

			{/* Overlay */}
			<div
				className={`cart-overlay ${showCartAside ? "active" : ""}`}
				onClick={handleOverlayClick}
			></div>

			{/* Aside del carrito */}
			<aside className={`cart-aside ${showCartAside ? "active" : ""}`}>
				<div className="cart-aside__header">
					<h2>Tu Carrito</h2>
					<button
						className="cart-aside__close"
						onClick={closeAside}
						aria-label="Cerrar carrito"
					>
						×
					</button>
				</div>

				<div className="cart-aside__content">
					{cart.length === 0 ? (
						<div className="cart-aside__empty">
							<p>Tu carrito está vacío</p>
						</div>
					) : (
						<>
							{cart.map((addedBook) => (
								<div key={addedBook.id} className="cart-aside__item">
									<img
										src={addedBook.cover}
										alt={addedBook.title}
										className="cart-item-img"
									/>
									<div className="cart-aside__item-info">
										<p className="cart-aside__item-title">{addedBook.title}</p>
										<p className="cart-aside__item-price">
											{addedBook.price.toFixed(2).replace(".", ",")}€
										</p>
									</div>
									<button
										className="cart-aside__item-remove"
										onClick={() => removeFromCart(addedBook)}
									>
										<img src={DeleteIcon} alt="" />
									</button>
								</div>
							))}
						</>
					)}
				</div>

				{cart.length > 0 && (
					<div className="cart-aside__footer">
						<div className="cart-aside__total">
							<span>Total:</span>
							<span>
								{cart
									.reduce((acc, currentValue) => acc + currentValue.price, 0)
									.toFixed(2)
									.replace(".", ",")}
								€
							</span>
						</div>
						<Link
							to={switchRoutes.cart}
							className="cart-aside__checkout-btn"
							onClick={closeAside}
						>
							Ver Carrito
						</Link>
					</div>
				)}
			</aside>
		</>
	);
};
