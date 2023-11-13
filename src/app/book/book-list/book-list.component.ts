import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { Book } from '../models';
import { AsyncPipe } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
    selector: 'ws-book-list',
    styleUrls: ['./book-list.component.scss'],
    templateUrl: 'book-list.component.html',
    standalone: true,
    imports: [BookCardComponent, AsyncPipe]
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private bookData: BookApiService) {
    this.books$ = this.bookData.getAll();
  }
}
