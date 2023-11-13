import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { BookApiService } from "../book-api.service";
import { Book, bookNa } from "../models";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "ws-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class BookEditComponent {
  book: Book = bookNa();
  private bookService = inject(BookApiService);
  private route = inject(ActivatedRoute)
    .params.pipe(
      switchMap((params) => this.bookService.getByIsbn(params.isbn)),
      takeUntilDestroyed()
    )
    .subscribe((book) => (this.book = book));

  save() {
    this.bookService
      .update(this.book.isbn, this.book)
      .pipe(takeUntilDestroyed())
      .subscribe();
  }
}
