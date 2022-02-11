import {Book} from "../../model/Book";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn:'root'
})
export class BookService {

  constructor() { }

  public getBooks(): Array<Book> {

    return[
      new Book("Java", "javaAuthor"),
      new Book("PHP", "phpAuthor"),
      new Book("Angular", "angularAuthor"),
      new Book("Js", "jsAuthor"),

    ]
  }
}
