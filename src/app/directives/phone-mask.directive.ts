import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent): void {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,4}).*/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }

    input.value = value;
  }
}
