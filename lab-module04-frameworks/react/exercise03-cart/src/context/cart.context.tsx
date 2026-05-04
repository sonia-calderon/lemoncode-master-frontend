import React, { useContext } from "react";
import { Book } from "@/pods/products/products.data";

interface CartContext {
	cart: Book[];
	addToCart: (book: Book) => void;
	removeFromCart: (addedBook: Book) => void;
	isAdded: (bookId: number) => boolean;
}

const CartContext = React.createContext<CartContext>({
	cart: [],
	addToCart: (book) => {},
	removeFromCart: (book) => {},
	isAdded: (bookId) => false,
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = React.useState<Book[]>([]);

	const addToCart = (book: Book) => {
		setCart((prev) => {
			const exists = prev.find((p) => p.id === book.id);
			if (exists) return prev;
			return [...prev, book];
		});
	};

	const removeFromCart = (addedBook: Book) => {
		setCart(cart.filter((item) => item.id !== addedBook.id));
	};

	const isAdded = (bookId: number) => {
		return cart.some((product) => product.id === bookId);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, isAdded }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
