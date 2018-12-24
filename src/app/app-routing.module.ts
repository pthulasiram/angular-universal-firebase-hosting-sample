import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MainComponent } from './ui/main/main.component';
import { BooksComponent } from './ui/books/books.component';
import { BooksListingComponent } from './ui/books/books-listing/books-listing.component';
import { BooksDetailsComponent } from './ui/books/books-details/books-details.component';
import { ErrorComponent } from './ui/error/error.component';
import { DmcaComponent } from './ui/dmca/dmca.component';
import { CategoryComponent } from './ui/category/category.component';

export const appRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [{
      path: '/', component: BooksComponent,
      children: [
        {
          path: 'books',
          component: BooksListingComponent
        },
        {
          path: 'dmca', 
          component:DmcaComponent
       },
       {
        path: 'category', 
        component:CategoryComponent
     },
        {
          path: 'books/:id',
          component: BooksDetailsComponent
        }, 
        {
           path: '', 
           redirectTo: 'books', 
           pathMatch: 'full' 
        },
        { 
          path: '**', 
          component: ErrorComponent
         }
      ]
    }]

  },


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],

})
export class AppRoutingModule { }