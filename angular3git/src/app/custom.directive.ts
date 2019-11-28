import { ElementRef, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector : '[custDir]'
})


export class CustomDirective {
    nativeElement: any;
    constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
    }
   @HostBinding('style.backgrouindColor') backgroundColor = 'yellow';
   @HostListener('mouseenter') mouseEnterEvent() {
       this.el.nativeElement.style.backgroundColor = 'brown';
    }

   @HostListener('mouseleave')mouseLeaveEvent() {
       this.el.nativeElement.style.backgroundColor = 'green';
   }
}

