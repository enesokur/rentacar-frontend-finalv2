import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input() fontWeight!: string;
  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const spans = this.element.nativeElement.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.fontWeight = this.fontWeight;
    }
  }
}
