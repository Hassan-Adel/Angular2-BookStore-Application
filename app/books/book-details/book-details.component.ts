import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //We need ActivatedRoute so we can grab the parameter that's been passed
import { IBook } from'../book';
import { BookService } from'../book.service';
import { Subscription } from 'rxjs/Subscription' // Allows us to subscribe to an observable(which is ActivativRoute parent)

@Component({
	moduleId: module.id,
	templateUrl: 'book-details.component.html'
})

export class BookDetailsComponent implements OnInit, OnDestroy {

    book: IBook;
    errorMessage: string;
    private sub: Subscription;
    imageWidth: number = 230;

    constructor(private _route: ActivatedRoute, private _bookService: BookService){
        console.log(this._route.snapshot.params['id'])
    }
    /*
    getTheBook(id: string) {
    this._bookService.getBook(id).subscribe(
        theBook => this.book = theBook,
        error => this.errorMessage = <any>error
      );
    } */

    //watch for an observable comming throgh the rout
    ngOnInit(): void{
        this._bookService.getBook(this._route.snapshot.params['id']).subscribe((theBook: IBook) => this.book = theBook);
    }
    ngOnDestroy(){}

}
