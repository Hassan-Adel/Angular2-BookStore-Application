"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_service_1 = require("../book.service");
var BooksListComponent = (function () {
    function BooksListComponent(_bookService) {
        this._bookService = _bookService;
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 20;
        this.favoriteMessage = "";
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
    BooksListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BooksListComponent.prototype.onFavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bs-books-list',
        templateUrl: 'books-list.component.html'
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map