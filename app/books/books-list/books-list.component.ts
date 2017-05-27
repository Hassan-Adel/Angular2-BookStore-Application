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
  books: any[] = [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn : new Date('02/11/1921'),
    inStock:"yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  }, {
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace II",
    bookPrice: 45.95,
    bookDescription: "Book of historical fiction",
    publishedOn : new Date('02/11/2001'),
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  }]
	//functions
	toggleImage():void{
		this.showImage = !this.showImage;
	}
}
