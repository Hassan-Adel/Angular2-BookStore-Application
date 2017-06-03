import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	moduleId: module.id,
	selector:'bs-favorite',
	templateUrl: 'favorite.component.html'
})

export class FavoriteComponent   {

    fave : boolean = false;

    @Input() favorite: string;
    @Input()reviews : number;
    @Output() notifyFavoriteClicked : EventEmitter<string> = new EventEmitter<string>();

//Must use backTickes "`" for string interpuloation to work (adding variables to string)
     onClick(): void{
         this.notifyFavoriteClicked.emit(`the favorite ${this.favorite} was saved`);
         this.fave = !this.fave;
     }

     isSelected(fave: boolean): boolean {
         if(!fave || !this.fave){
             return false;
         }
         else if(fave){
             return true;
         }
     }
}
