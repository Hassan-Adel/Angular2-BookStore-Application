import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BooksListComponent }   from './books/books-list/books-list.component';
import { FavoriteComponent }   from './favorites/favorite.component';
import { HighlightDirective }   from './shared/highlight.directive';
import { TruncatePipe }   from './shared/pipes/truncate.pipe';
import { BookService }   from './books/book.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:    [BookService ],
  declarations: [ AppComponent, BooksListComponent, FavoriteComponent, HighlightDirective, TruncatePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
