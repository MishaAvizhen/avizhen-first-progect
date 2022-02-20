import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BooksComponent} from "./books/books.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";

const routes: Routes=[
  {path:'books', component:BooksComponent},
  {path:'create', component:CreateBookComponent},
  { path: 'update/:id', component: UpdateBookComponent },
  {path: '', redirectTo: '/books', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
