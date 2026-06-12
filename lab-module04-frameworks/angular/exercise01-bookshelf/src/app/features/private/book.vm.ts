export type Status = 'read' | 'in-progress' | 'want-to-read' | 'did-not-finish';

export type Genres = 'Mystery' | 'Romance' | 'Science Fiction' | 'Historical Fiction' | 'Fantasy';

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: Status | undefined;
  available: boolean | undefined;
  genres: Genres | undefined;
}
