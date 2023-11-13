import { Component, OnDestroy, inject } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { BookApiService } from "../book-api.service";
import { bookNa } from "../models";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "ws-book-new",
  styleUrls: ["./book-new.component.scss"],
  templateUrl: "./book-new.component.html",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class BookNewComponent {
  private router = inject(Router);
  private bookService = inject(BookApiService);

  form: UntypedFormGroup = inject(UntypedFormBuilder).group({
    isbn: ["", [Validators.required, Validators.minLength(3)]],
    title: ["", Validators.required],
    author: ["", Validators.required],
    cover: [""],
  });

  create() {
    const book = { ...bookNa(), ...this.form.value };

    this.bookService
      .create(book)
      .pipe(
        tap(() => this.router.navigateByUrl("/")),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
