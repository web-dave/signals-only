import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BookApiService } from "../book-api.service";
import { Book } from "../models";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { BookCardComponent } from "../book-card/book-card.component";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "ws-book-list",
  styleUrls: ["./book-list.component.scss"],
  templateUrl: "book-list.component.html",
  standalone: true,
  imports: [BookCardComponent, AsyncPipe, JsonPipe],
})
export class BookListComponent {
  books$ = inject(BookApiService).getAll();
}
