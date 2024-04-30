import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersListItemDto } from '../models/customers-list-item-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomersApiService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomersListItemDto[]> {
    return this.http.get<CustomersListItemDto[]>(
      'http://localhost:3000/customers'
    );
  }
}
