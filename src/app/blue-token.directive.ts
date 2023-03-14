import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appBlueToken]'
})
export class BlueTokenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

}
