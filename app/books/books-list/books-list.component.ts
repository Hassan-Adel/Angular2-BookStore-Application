import { Component } from '@angular/core';
import { IBook } from'../book';
import { BookService } from'../book.service';

@Component({
	moduleId: module.id,
	selector:'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent{

	books:IBook[];
	imageWidth: number = 100;
	showImage: boolean = true;
	booksInStock: number = 20;
	favoriteMessage : string = "";

	constructor(private _bookService: BookService){
		this.books = _bookService.getBooks();
	}

	//interpuloation
	/*
  books: IBook[] = [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn : new Date('02/11/1921'),
    inStock:"yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg",
    hardcover:false
  }, {
    bookAuthor: "Tom Jones ha",
    bookTitle: "War and Peace II",
    bookPrice: 45.95,
    bookDescription: "Book of historical fiction",
    publishedOn : new Date('02/11/2001'),
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  }] */
	//functions
	toggleImage():void{
		this.showImage = !this.showImage;
	}

	onFavoriteClicked(message: string): void{
			this.favoriteMessage = message;
	}
}
