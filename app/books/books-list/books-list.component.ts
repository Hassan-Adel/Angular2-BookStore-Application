import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector:'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent {
	//property binding
	imageWidth: number = 100;
	showImage: boolean = true;
	booksInStock: number = 20;
	//interpuloation
	bookAuthor: string = "Tom Jones";
	bookTitle: string = "War and Peace II";
	bookPrice: string = "$29.95";
	bookDescription: string = "Book of historical fiction.";
	bookReviews: number = 15;
	bookImageUrl: string = "app/assets/images/656.jpg";

	//functions
	toggleImage():void{
		this.showImage = !this.showImage;
	}
}
