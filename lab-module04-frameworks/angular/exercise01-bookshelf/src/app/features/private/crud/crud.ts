import { Component, signal, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';

type Status = 'read' | 'in-progress' | 'want-to-read' | 'did-not-finish';

type Genres = 'Mystery' | 'Romance' | 'Science Fiction' | 'Historical Fiction' | 'Fantasy';

export interface Library {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: Status | undefined;
  available: boolean | undefined;
  genres: Genres | undefined;
}

const LibraryData: Library[] = [
  {
    id: 1,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    cover: '/images/don-quijote.webp',
    status: 'read',
    available: true,
    genres: 'Historical Fiction',
  },
  {
    id: 2,
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    cover: '/images/orgullo-prejuicio.webp',
    status: 'read',
    available: true,
    genres: 'Romance',
  },
  {
    id: 3,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    cover: '/images/cien-anos-soledad.webp',
    status: 'in-progress',
    available: false,
    genres: 'Historical Fiction',
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    cover: '/images/1984.webp',
    status: 'want-to-read',
    available: true,
    genres: 'Science Fiction',
  },
  {
    id: 5,
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoievski',
    cover: '/images/crimen-castigo.webp',
    status: 'read',
    available: true,
    genres: 'Mystery',
  },
  {
    id: 6,
    title: 'El conde de Montecristo',
    author: 'Alexandre Dumas',
    cover: '/images/conde-montecristo.webp',
    status: 'read',
    available: false,
    genres: 'Historical Fiction',
  },
  {
    id: 7,
    title: 'La Odisea',
    author: 'Homero',
    cover: '/images/odisea.webp',
    status: 'want-to-read',
    available: true,
    genres: 'Fantasy',
  },
  {
    id: 8,
    title: 'Frankenstein',
    author: 'Mary Shelley',
    cover: '/images/frankenstein.webp',
    status: 'read',
    available: true,
    genres: 'Science Fiction',
  },
  {
    id: 9,
    title: 'El gran Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: '/images/gran-gatsby.webp',
    status: 'did-not-finish',
    available: false,
    genres: 'Historical Fiction',
  },
  {
    id: 10,
    title: 'La metamorfosis',
    author: 'Franz Kafka',
    cover: '/images/metamorfosis.webp',
    status: 'read',
    available: true,
    genres: 'Mystery',
  },
  {
    id: 11,
    title: 'Los miserables',
    author: 'Victor Hugo',
    cover: '/images/miserables.webp',
    status: 'in-progress',
    available: true,
    genres: 'Historical Fiction',
  },
  {
    id: 12,
    title: 'Cumbres borrascosas',
    author: 'Emily Brontë',
    cover: '/images/cumbres-borrascosas.webp',
    status: 'read',
    available: false,
    genres: 'Romance',
  },
  {
    id: 13,
    title: 'Moby Dick',
    author: 'Herman Melville',
    cover: '/images/moby-dick.webp',
    status: 'want-to-read',
    available: true,
    genres: 'Historical Fiction',
  },
  {
    id: 14,
    title: 'El extranjero',
    author: 'Albert Camus',
    cover: '/images/extranjero.webp',
    status: 'read',
    available: true,
    genres: 'Mystery',
  },
  {
    id: 15,
    title: 'Hamlet',
    author: 'William Shakespeare',
    cover: '/images/hamlet.webp',
    status: 'read',
    available: false,
    genres: 'Historical Fiction',
  },
  {
    id: 16,
    title: 'El retrato de Dorian Gray',
    author: 'Oscar Wilde',
    cover: '/images/dorian-gray.webp',
    status: 'in-progress',
    available: true,
    genres: 'Fantasy',
  },
  {
    id: 17,
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    cover: '/images/madame-bovary.webp',
    status: 'did-not-finish',
    available: true,
    genres: 'Romance',
  },
  {
    id: 18,
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    cover: '/images/principito.webp',
    status: 'read',
    available: true,
    genres: 'Fantasy',
  },
  {
    id: 19,
    title: 'Divina Comedia',
    author: 'Dante Alighieri',
    cover: '/images/divina-comedia.webp',
    status: 'want-to-read',
    available: false,
    genres: 'Fantasy',
  },
  {
    id: 20,
    title: 'Una habitación propia',
    author: 'Virginia Woolf',
    cover: '/images/habitacion-propia.webp',
    status: 'read',
    available: true,
    genres: 'Historical Fiction',
  },
];

@Component({
  selector: 'app-crud',
  imports: [MatButtonModule, MatTableModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud {
  displayedColumns: string[] = [
    'cover',
    'title',
    'author',
    'status',
    'available',
    'genres',
    'actions',
  ];
  dataSource = [...LibraryData];

  addBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    cover: new FormControl(''),
    status: new FormControl<Status>('want-to-read'),
    available: new FormControl<boolean>(false),
    genres: new FormControl<Genres>('Mystery'),
  });

  editBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    cover: new FormControl(''),
    status: new FormControl<Status>('want-to-read'),
    available: new FormControl<boolean>(false),
    genres: new FormControl<Genres>('Mystery'),
  });

  isNewBookModalOpen = signal(false);
  isEditModalOpen = signal(false);

  editBookId: number | null = null;

  selectedCoverAdd: string = '';
  selectedCoverEdit: string = '';

  openNewBookModal(): void {
    this.isNewBookModalOpen.set(true);
  }

  openEditModal(id: number): void {
    const book = this.dataSource.find((book) => book.id === id);

    if (!book) return;

    this.editBookId = id;
    this.isEditModalOpen.set(true);

    this.editBookForm.patchValue({
      title: book.title,
      author: book.author,
      cover: book.cover,
      status: book.status,
      available: book.available,
      genres: book.genres,
    });
  }

  addBook(event: Event): void {
    event.preventDefault();

    if (this.addBookForm.invalid) {
      return;
    }

    const title = this.addBookForm.controls.title.value ?? '';
    const author = this.addBookForm.controls.author.value ?? '';
    const cover = this.selectedCoverAdd;
    const status = (this.addBookForm.controls.status.value as Status) ?? '';
    const available = this.addBookForm.controls.available.value ?? true;
    const genres = (this.addBookForm.controls.genres.value as Genres) ?? '';

    const newBook: Library = {
      id: Date.now(),
      title: title,
      author: author,
      cover: cover,
      status: status,
      available: available,
      genres: genres,
    };
    this.dataSource = [newBook, ...this.dataSource];
    this.addBookForm.reset();
    this.selectedCoverAdd = '';
    this.isNewBookModalOpen.set(false);
  }

  onAddCoverSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.selectedCoverAdd = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  editBook(event: Event): void {
    event.preventDefault();

    if (this.editBookForm.invalid || this.editBookId === null) {
      return;
    }

    this.dataSource = this.dataSource.map((book) =>
      book.id === this.editBookId
        ? {
            ...book,
            title: this.editBookForm.controls.title.value ?? '',
            author: this.editBookForm.controls.author.value ?? '',
            cover: this.selectedCoverEdit || this.editBookForm.value.cover || book.cover,
            status: this.editBookForm.controls.status.value as Status,
            available: this.editBookForm.controls.available.value ?? false,
            genres: this.editBookForm.controls.genres.value as Genres,
          }
        : book,
    );

    this.editBookForm.reset();
    this.editBookId = null;
    this.selectedCoverEdit = '';
    this.isEditModalOpen.set(false);
  }

  onEditCoverSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.selectedCoverEdit = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  deleteBook(id: number): void {
    this.dataSource = this.dataSource.filter((book) => book.id !== id);
  }
}
