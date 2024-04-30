import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarsApiService } from '../../services/cars-api.service';
import { CarsListItemDto } from '../../models/cars-list-item-dto';
import { RentalApiService } from '../../../rentals/services/rental-api.service';
import { PostRentalRequest } from '../../../rentals/models/post-rental-request';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent implements OnInit {
  cars!: Array<CarsListItemDto>;
  customerId: number = 1;

  constructor(
    private carsApiService: CarsApiService,
    private rentalApiService: RentalApiService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carsApiService.getCars().subscribe((response) => {
      this.cars = response;
    });
  }

  rentACar(carId: number) {
    const request: PostRentalRequest = {
      carId: carId,
      customerId: this.customerId,
    };
    this.rentalApiService.postRental(request).subscribe();
  }
}
