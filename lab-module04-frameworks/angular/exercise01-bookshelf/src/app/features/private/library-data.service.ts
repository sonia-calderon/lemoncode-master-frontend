import { Injectable, signal } from '@angular/core';
import { Book } from './book.vm';
import { LibraryData } from './library.data';

@Injectable({
  providedIn: 'root',
})
export class LibraryDataService {
  books = signal<Book[]>([...LibraryData]);

  addBook(book: Book): void {
    this.books.update((books) => [...books, book]);
  }

  updateBook(updatedBook: Book): void {
    this.books.update((books) =>
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
    );
  }

  deleteBook(id: number): void {
    this.books.update((books) => books.filter((book) => book.id !== id));
  }
}
