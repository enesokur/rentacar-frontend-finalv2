import { Component } from '@angular/core';
import { CarsListComponent } from '../../features/cars/components/cars-list/cars-list.component';

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [CarsListComponent],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.scss',
})
export class CarsPageComponent {}
