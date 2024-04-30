import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true,
})
export class MultipleDirective {
  @Input() appMultiple!: number;

  @Input('appMultiple') set elementSize(value: number) {
    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

  constructor(
    private template: TemplateRef<ElementRef>,
    private viewContainer: ViewContainerRef
  ) {}
}
