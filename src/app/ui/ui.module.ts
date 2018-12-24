import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { DmcaComponent } from './dmca/dmca.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, SidebarComponent, MainComponent, BooksComponent, BooksListingComponent, BooksDetailsComponent, SpinnerComponent, ErrorComponent, DmcaComponent, CategoryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class UiModule { }
