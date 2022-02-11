import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../model/Book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

@Input()
books?:Array<Book>

  constructor() {

  }

  ngOnInit() {

  }



}
