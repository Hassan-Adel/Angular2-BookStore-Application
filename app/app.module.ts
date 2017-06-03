import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BooksListComponent }   from './books/books-list/books-list.component';
import { BookDetailsComponent }   from './books/book-details/book-details.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { FavoriteComponent }   from './favorites/favorite.component';
import { HighlightDirective }   from './shared/highlight.directive';
import { TruncatePipe }   from './shared/pipes/truncate.pipe';
import { BookService }   from './books/book.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


var routes = [
         { path: 'welcome', component: WelcomeComponent },
         { path: 'books', component: BooksListComponent },
         { path: 'book/:id', component: BookDetailsComponent },
         { path: '', redirectTo: 'welcome', pathMatch: 'full' },//anytime user navigates to root take them to books, use pathMach whenever using redirecting
         { path: '**', redirectTo: 'welcome', pathMatch: 'full' }// '**' (wild card) when a user navigates to route that isn't defined , ie: 404
                         ];

@NgModule({
    imports:      [ BrowserModule,
                       FormsModule,
                       HttpModule,
                       RouterModule.forRoot(routes) ],
  providers:    [BookService ],
  declarations: [ AppComponent, BooksListComponent, FavoriteComponent, HighlightDirective, TruncatePipe, WelcomeComponent, BookDetailsComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
