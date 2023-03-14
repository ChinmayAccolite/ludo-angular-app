import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToken]'
})
export class TokenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
