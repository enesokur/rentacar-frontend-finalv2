import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelsListItemDto } from '../models/models-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostModelResponse } from '../models/post-model-response';
import { UpdateModelRequest } from '../models/update-model-request';
import { UpdateModelResponse } from '../models/update-model-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getModel(id: number): Observable<ModelsListItemDto> {
    return this.http.get<ModelsListItemDto>(
      'http://localhost:3000/models/' + id
    );
  }

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null
  ): Observable<ModelsListItemDto[]> {
    const requestQueryParams: any = {};
    if (brandId != null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelsListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams,
    });
  }

  postModel(model: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }

  putModel(
    model: UpdateModelRequest,
    modelId: string | null
  ): Observable<UpdateModelResponse> {
    return this.http.put<UpdateModelResponse>(
      'http://localhost:3000/models/' + modelId,
      model
    );
  }
}
