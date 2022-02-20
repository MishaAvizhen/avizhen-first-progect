import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import {FormsModule} from "@angular/forms";
import { CreateBookComponent } from './create-book/create-book.component';
import {AppRoutingModule} from './app-routing.module'
import {RestApiService} from "./services/rest-api.service";
import { UpdateBookComponent } from './update-book/update-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateBookComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
