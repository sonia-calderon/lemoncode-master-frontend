import React from "react";

import Logo from "@/assets/icons/book-bookmark-favorite-like-star-svgrepo-com.svg";
import CartIcon from "@/assets/icons/cart-svgrepo-com.svg";

export const Header: React.FC = () => {
	return (
		<header className="header container">
			<div className="header__logo">
				<img src={Logo} alt="Book Store Logo" />
				<p>Book Store</p>
			</div>
			<div className="header__cart">
				<a href="">
					<img src={CartIcon} alt="Cart Icon" />
				</a>
			</div>
		</header>
	);
};
