import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/core/router/routes";
import { useCart } from "@/context/cart.context";

import Logo from "@/assets/icons/book-bookmark-favorite-like-star-svgrepo-com.svg";
import CartIcon from "@/assets/icons/cart-svgrepo-com.svg";

export const Header: React.FC = () => {
	const { cart } = useCart();
	return (
		<div className="header-wrapper">
			<header className="header container">
				<Link to={switchRoutes.root} className="header__logo">
					<img src={Logo} alt="Book Store Logo" />
					<p>Books</p>
				</Link>
				<div className="header__cart">
					<Link to={switchRoutes.cart}>
						<img src={CartIcon} alt="Cart Icon" />
					</Link>
					<span>{cart.length}</span>
				</div>
			</header>
		</div>
	);
};
