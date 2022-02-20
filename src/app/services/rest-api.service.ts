import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from "../model/Book";


@Injectable()
export class RestApiService {

  private apiURL = 'http://10.92.92.22:8082/api/library';

  constructor(private http: HttpClient) {
  }

  public getBooks() {
    return this.http.get<Book[]>(this.apiURL + "/books");
  }


  public getBook(id) {
    return this.http.get(this.apiURL + "/books/" + id);
  }


  public createBook(book) {
    return this.http.post<Book>(this.apiURL + "/books", book);
  }


  public deleteBook(book) {
    return this.http.delete(this.apiURL + "/books/" + book.id);
  }

  public updateBook(book) {
    return this.http.put<Book>(this.apiURL + "/books", book);
  }

}
