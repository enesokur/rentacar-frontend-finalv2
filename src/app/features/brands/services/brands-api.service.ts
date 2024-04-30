import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandsListItemDto } from '../models/brands-list-item-dto';
import { PostBrandRequest } from '../models/post-brand-request';
import { PostBrandResponse } from '../models/post-brand-response';
import { UpdateBrandRequest } from '../models/update-brand-request';
import { UpdateBrandResponse } from '../models/update-brand-response';

@Injectable({
  providedIn: 'root',
})
export class BrandsApiService {
  constructor(private http: HttpClient) {}

  getBrand(id: string | null): Observable<BrandsListItemDto> {
    return this.http.get<BrandsListItemDto>(
      'http://localhost:3000/brands/' + id
    );
  }

  getList(): Observable<BrandsListItemDto[]> {
    return this.http.get<BrandsListItemDto[]>('http://localhost:3000/brands');
  }

  postBrand(brand: PostBrandRequest): Observable<PostBrandResponse> {
    return this.http.post<PostBrandResponse>(
      'http://localhost:3000/brands',
      brand
    );
  }

  updateBrand(
    brand: UpdateBrandRequest,
    id: string | null
  ): Observable<UpdateBrandResponse> {
    return this.http.put<UpdateBrandResponse>(
      'http://localhost:3000/brands/' + id,
      brand
    );
  }
}
