import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input('appButton') set condition(value: boolean) {
    if (value) {
      this.element.nativeElement.disabled = true;
    } else {
      this.element.nativeElement.disabled = false;
    }
  }
  constructor(private element: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.element.nativeElement.className = 'btn btn-primary';
  }
}
