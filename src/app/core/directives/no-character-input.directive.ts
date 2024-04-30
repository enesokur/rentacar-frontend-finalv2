import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class NoCharacterInputDirective {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const newValue = value.replace(/\d/g, '');
    this.element.nativeElement.value = newValue;
    console.log(this.element.nativeElement.value);
  }
}
