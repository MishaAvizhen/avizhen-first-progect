import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/Book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[]=[];

  constructor(
   private httpClients: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getBooks();
  }
    getBooks(){
      this.httpClients.get<any>('http://10.92.92.22:8082/api/library/books').subscribe(
        response => {
          console.log(response);
          this.books = response;
        }
      );
    }
}
