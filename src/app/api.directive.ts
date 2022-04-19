import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appApi]'
})
export class ApiDirective {

  constructor(private elem : ElementRef) { 
    elem.nativeElement.style.color='#000';
    elem.nativeElement.style.background='#d5a6bd';
  }

}
