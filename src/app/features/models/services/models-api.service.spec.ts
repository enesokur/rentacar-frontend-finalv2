import { TestBed } from '@angular/core/testing';

import { ModelsApiService } from './models-api.service';

describe('ModelsApiService', () => {
  let service: ModelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
