import { Component } from '@angular/core';
import {BookService} from "./services/bookService/BookService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avizhen library';

  constructor(public bookService: BookService) {
  }
}
