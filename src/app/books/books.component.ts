import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import {Book} from "../model/Book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books?: Book[];

  constructor(
    private restApiService: RestApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getBooks()
    // @ts-ignore
    this.deleteBook(this.books)
  }

  getBooks() {
    this.restApiService.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      }
    );
  }
  deleteBook(employee: Book): void {
    // @ts-ignore
    this.restApiService.deleteBook(book)
      .subscribe( data => {
        // @ts-ignore
        this.books = this.books.filter(u => u !== book);
      })
  };
}
