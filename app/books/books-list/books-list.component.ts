import { Component, OnInit } from '@angular/core';
import { IBook } from'../book';
import { BookService } from'../book.service';

@Component({
	moduleId: module.id,
	selector:'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit{

	books:IBook[];
	imageWidth: number = 100;
	showImage: boolean = true;
	booksInStock: number = 20;
	favoriteMessage : string = "";
    errorMessage : string;

	constructor(private _bookService: BookService){}
    //The convintion is to put service related logic inside ngOninit life cycle hook
    ngOnInit(){
        this.getAllBooks();
    }

    //functions
  getAllBooks() {
    this._bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error
      );
  }

	toggleImage():void{
		this.showImage = !this.showImage;
	}

	onFavoriteClicked(message: string): void{
			this.favoriteMessage = message;
	}
}
