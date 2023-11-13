import { Component, Input } from '@angular/core';
import { Book, bookNa } from '../models';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'ws-book-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterLink]
})
export class BookCardComponent {
  @Input() content: Book = bookNa();
}
