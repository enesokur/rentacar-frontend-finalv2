import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsListItemDto } from '../models/cars-list-item-dto';

@Injectable({
  providedIn: 'root',
})
export class CarsApiService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<CarsListItemDto[]> {
    return this.http.get<CarsListItemDto[]>('http://localhost:3000/cars');
  }
}
