import  { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name:'limitChar'
})

export class TruncatePipe implements PipeTransform {
	//limit represents the maximium number of characters to be displayed n the view
	transform(input:string, limit:number) {
		if(input)
			return (input.length > limit)? input.substr(0, limit)+'...':input;
	}
}
