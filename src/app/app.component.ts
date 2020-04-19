import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch04';

  shouldshow = false;

  score = 60;

  color: string;

  fontsize: string;

  isBordered = true;

  classObj = {
    bordered: this.isBordered,
    blue: false,
    round: true
  }

  onToggle() {
    this.shouldshow = !this.shouldshow;
    return false;
  }

  grade() {
    return Math.floor(this.score / 10);
  }

  onInput(evt: Event) {
    const inputele = <HTMLInputElement>evt.target;
    this.score = Number(inputele.value);
  }

  apply(color: string, fontsize: string) {
    this.color = color;
    this.fontsize = fontsize;
  }

  toggleBordered() {
    this.isBordered = !this.isBordered;
  }
}
