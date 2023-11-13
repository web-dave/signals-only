import { HttpClient } from "@angular/common/http";
import {
  Injectable,
  Signal,
  WritableSignal,
  effect,
  inject,
  signal,
} from "@angular/core";
import { Observable, filter } from "rxjs";
import { Book } from "./models";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({ providedIn: "root" })
export class BookApiService {
  private endpoint = "http://localhost:4730/books";
  private http = inject(HttpClient);

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}`);
  }
  getAll_S(): WritableSignal<Book[]> {
    const returnValue = signal([] as Book[]);

    this.http
      .get<Book[]>(`${this.endpoint}`)
      .subscribe((data) => returnValue.update(() => data));

    return returnValue;
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/${isbn}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.endpoint}`, book);
  }

  update(isbn: string, patch: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(`${this.endpoint}/${isbn}`, patch);
  }

  delete(isbn: string): Observable<Book> {
    return this.http.delete<Book>(`${this.endpoint}/${isbn}`);
  }
}
