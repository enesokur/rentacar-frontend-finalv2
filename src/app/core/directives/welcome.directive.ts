import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class WelcomeDirective {
  /* @Input('appWelcome') set delay(time: number) {
    //this.viewContainer.clear();
    setTimeout(() => {
      document.getElementById('welcome')?.remove();
      this.viewContainer.createEmbeddedView(this.template);
    }, time);
  }
*/

  delay: number = 2000;
  @Input('appWelcome') set outputDelay(value: TemplateRef<HTMLElement>) {
    this.viewContainer.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(value);
    }, this.delay);
  }
  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}

//appWelcome isminde bir directive oluşturun. appWelcome directive ile verilen değer kadar ms değerinde gecikmeyle
//içindeki elemanlarını yazdırınız. Gecikmeden önce Welcome yazsını yazdırınız. Bu şekilde bir structural directive yazınız.
