import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

type Status = 'read' | 'in-progress' | 'want-to-read' | 'did-not-finish';

type Genres = 'Mystery' | 'Romance' | 'Science Fiction' | 'Historical Fiction' | 'Fantasy';

export interface Library {
  id: number;
  title: string;
  author: string;
  status: Status;
  available: boolean;
  genres: Genres;
}

const LibraryData: Library[] = [
  {
    id: 1,
    title: 'Titulo 1',
    author: '',
    status: 'want-to-read',
    available: true,
    genres: 'Mystery',
  },
  {
    id: 2,
    title: 'Titulo 2',
    author: '',
    status: 'want-to-read',
    available: false,
    genres: 'Fantasy',
  },
  {
    id: 3,
    title: 'Titulo 3',
    author: '',
    status: 'read',
    available: true,
    genres: 'Mystery',
  },
];

@Component({
  selector: 'app-crud',
  imports: [MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud {
  displayedColumns: string[] = ['title', 'author', 'status', 'available', 'genres', 'actions'];
  dataSource = [...LibraryData];

  addBook() {
    console.log('add');
    console.log(this.dataSource);
    const newbook = [
      {
        id: 4,
        title: 'Titulo 4',
        author: '',
        status: 'read',
        available: true,
        genres: 'Mystery',
      },
    ];
  }

  editBook(book: Library): void {
    console.log('edit:' + book);
  }

  deleteBook(id: number): void {
    this.dataSource = this.dataSource.filter((book) => book.id !== id);
  }
}
