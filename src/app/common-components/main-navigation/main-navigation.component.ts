import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { AsyncPipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";

import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "ws-main-navigation",
  templateUrl: "./main-navigation.component.html",
  styleUrls: ["./main-navigation.component.scss"],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
  ],
})
export class MainNavigationComponent {
  public isHandset = toSignal(
    inject(BreakpointObserver)
      .observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      )
  );
}
