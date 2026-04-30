import React from "react";
import { books, Book } from "./products.data";

export const ProductComponent: React.FC = () => {
	const [addedProducts, setAddedProducts] = React.useState<Book[]>([]);

	const handleAddProduct = (book: Book) => {
		setAddedProducts((prev) => {
			const exists = prev.find((p) => p.id === book.id);
			if (exists) return prev;
			return [...prev, book];
		});
	};

	const isAdded = (bookId: number) => {
		return addedProducts.some((product) => product.id === bookId);
	};

	const handleDeleteProduct = (addedBook: Book) => {
		setAddedProducts(addedProducts.filter((item) => item.id !== addedBook.id));
	};

	return (
		<>
			<h3>Listado de libros</h3>
			<div className="cart-overlay">
				<p>Libro añadido</p>
				{addedProducts.map((addedBook) => (
					<div key={addedBook.id}>
						<p>{addedBook.title}</p>
						<p>{addedBook.price}</p>
						<button onClick={(e) => handleDeleteProduct(addedBook)}>
							Eliminar
						</button>
					</div>
				))}
			</div>
			<ul className="books">
				{books.map((book) => (
					<li key={book.id} className="book">
						<img src={book.cover} alt={book.title} />
						<p>{book.title}</p>
						<p>{book.author}</p>
						<p>{book.price}€</p>
						<button
							onClick={() => handleAddProduct(book)}
							disabled={isAdded(book.id)}
						>
							Añadir al carrito
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
