import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValidSudokuNumber]',
  standalone: true
})
export class ValidSudokuNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const inputValue: string = this.el.nativeElement.value;

    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      return;
    }

    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }

    if (+inputValue >= 9 || event.key === '0') {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text/plain') || '';
    const valid = /^[1-9]$/.test(pastedData);
    if (!valid) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const inputValue: string = this.el.nativeElement.value;

    if (inputValue === '' || inputValue === '0' || +inputValue > 9) {
      this.el.nativeElement.value = '';
    }
  }
}
