import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../library-data.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private libraryDataService = inject(LibraryDataService);

  books = this.libraryDataService.books;
}
