import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreenToken]'
})
export class GreenTokenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

}
