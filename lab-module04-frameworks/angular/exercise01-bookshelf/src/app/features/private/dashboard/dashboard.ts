import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../library-data.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private libraryDataService = inject(LibraryDataService);

  books = this.libraryDataService.books;
}
