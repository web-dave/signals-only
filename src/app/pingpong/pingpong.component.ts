import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ws-pingpong",
  standalone: true,
  imports: [],
  template: `
    @if(isEnabled){
    <h1>👍</h1>
    }@else {
    <h1>👎</h1>
    }
  `,
})
export class PingpongComponent {
  isEnabled: boolean | undefined;
  @Input() set enabled(value: string | boolean) {
    this.isEnabled = `${value}` !== "false";
  }
}
