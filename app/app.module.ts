import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BooksListComponent }   from './books/books-list/books-list.component';
import { FavoriteComponent }   from './favorites/favorite.component';
import { HighlightDirective }   from './shared/highlight.directive';
import { TruncatePipe }   from './shared/pipes/truncate.pipe';
import { BookService }   from './books/book.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:      [ BrowserModule,
                       FormsModule,
                       HttpModule,
                       RouterModule.forRoot([
         { path: 'books', component: BooksListComponent },
         { path: '', redirectTo: 'books', pathMatch: 'full' },//anytime user navigates to root take them to books, use pathMach whenever using redirecting
         { path: '**', redirectTo: 'books', pathMatch: 'full' }// '**' (wild card) when a user navigates to route that isn't defined , ie: 404
                         ]) ],
  providers:    [BookService ],
  declarations: [ AppComponent, BooksListComponent, FavoriteComponent, HighlightDirective, TruncatePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
