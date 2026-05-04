import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/cart.context";
import { switchRoutes } from "@/core/router/routes";
import DeleteIcon from "@/assets/icons/delete-svgrepo-com.svg";

export const CartComponent: React.FC = () => {
	const { cart, removeFromCart } = useCart();

	const total = cart.reduce((acc, currentValue) => acc + currentValue.price, 0);

	if (cart.length === 0) {
		return (
			<div className="cart-page">
				<h1>Mi Carrito</h1>
				<div className="cart-page__empty">
					<p>Tu carrito está vacío</p>
					<Link to={switchRoutes.root}>Ir a la tienda</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="cart-page">
			<h1>Mi Carrito</h1>

			{cart.map((addedBook) => (
				<div key={addedBook.id} className="cart-page__item">
					<img
						src={addedBook.cover}
						alt={addedBook.title}
						className="cart-item-img"
					/>
					<div className="cart-page__item-info">
						<h3>{addedBook.title}</h3>
						<p className="cart-page__item-price">
							{addedBook.price.toFixed(2).replace(".", ",")}€
						</p>
					</div>
					<button
						className="cart-page__item-remove"
						onClick={() => removeFromCart(addedBook)}
					>
						<img src={DeleteIcon} alt="" />
					</button>
				</div>
			))}

			<div className="cart-page__total">
				<div className="cart-page__total-amount">
					<span>Total:</span>
					<span>{total.toFixed(2).replace(".", ",")}€</span>
				</div>
			</div>
		</div>
	);
};
