import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostRentalResponse } from '../models/post-rental-response';
import { PostRentalRequest } from '../models/post-rental-request';

@Injectable({
  providedIn: 'root',
})
export class RentalApiService {
  constructor(private http: HttpClient) {}

  postRental(rental: PostRentalRequest): Observable<PostRentalResponse> {
    return this.http.post<PostRentalResponse>(
      'http://localhost:3000/rentals',
      rental
    );
  }
}
