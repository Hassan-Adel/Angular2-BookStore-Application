import { Component, OnInit, OnChanges } from '@angular/core';
//import { IBook } from'../book';


interface IBook{
	bookAuthor: string;
    bookTitle: string;
    bookPrice: number;
    bookDescription: string;
    publishedOn : Date;
    inStock?:string; //Can exist or not
    bookReviews: number;
    bookImageUrl: string;
    hardcover?:boolean; //Can exist or not
}

@Component({
	moduleId: module.id,
	selector:'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit, OnChanges {

	ngOnInit(){
		console.log('Init', this.booksInStock);
	}
	//used in two main instances :
	//1-when we are comunicating between a parent and child component
	//2-when we have data that's updated over the wire(web socket, observable)
	ngOnChanges(){
		console.log('new change detected');
	}

	changeMethod(): void {
		this.animals = ['dag','cat'];
		console.log('change method happened');
	}
	//property binding
	animals: string[] = ['lion','rabbit'];
	imageWidth: number = 100;
	showImage: boolean = true;
	booksInStock: number = 20;
	//interpuloation
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
