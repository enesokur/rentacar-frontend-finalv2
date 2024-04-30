import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.scss',
})
export class CounterComponentComponent {
  private _counter: number = 0;

  get getCounter(): number {
    return this._counter;
  }

  set setCounter(value: number) {
    this._counter = value;
  }

  counterHandler = (value: number): void => {
    this._counter = this._counter + value;
  };

  get isCounterZero(): boolean {
    return this.getCounter == 0;
  }
}
