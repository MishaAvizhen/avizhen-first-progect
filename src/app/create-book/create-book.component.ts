import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import {Router} from "@angular/router";
import {Book} from "../model/Book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})


export class CreateBookComponent implements OnInit {
  book: Book = new Book();

  constructor(
    private restApiService: RestApiService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.createBook();
  }

  createBook() {
    this.restApiService.createBook(this.book)
      .subscribe((data: {}) => {
        alert("Book created successfully.");
        this.router.navigate(['/books'])
      })
  }


}
