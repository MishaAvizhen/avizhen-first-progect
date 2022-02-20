import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book: any = {};

  constructor(
    private restApiService: RestApiService,
    private router: Router,
     private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restApiService.getBook(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.book = data;
      });
  };

    updateBook(): void{
      this.restApiService.updateBook(this.book)
        .subscribe(data => {
          alert("Book updated successfully.");
          this.router.navigate(['/books']);
        });
    };

}
