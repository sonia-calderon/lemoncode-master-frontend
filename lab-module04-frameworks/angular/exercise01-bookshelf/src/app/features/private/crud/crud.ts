import { Component, signal, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Book, Status, Genres } from '../book.vm';
import { LibraryDataService } from '../library-data.service';

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
  private libraryDataService = inject(LibraryDataService);
  dataSource = this.libraryDataService.books;

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
    const book = this.dataSource().find((book) => book.id === id);

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

    const newBook: Book = {
      id: Date.now(),
      title: title,
      author: author,
      cover: cover,
      status: status,
      available: available,
      genres: genres,
    };

    this.libraryDataService.addBook(newBook);
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

    const updateBook: Book = {
      id: this.editBookId,
      title: this.editBookForm.controls.title.value ?? '',
      author: this.editBookForm.controls.author.value ?? '',
      cover: this.selectedCoverEdit || this.editBookForm.value.cover || '',
      status: this.editBookForm.controls.status.value as Status,
      available: this.editBookForm.controls.available.value ?? false,
      genres: this.editBookForm.controls.genres.value as Genres,
    };

    this.libraryDataService.updateBook(updateBook);
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
    this.libraryDataService.deleteBook(id);
  }
}
