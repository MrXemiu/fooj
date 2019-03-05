import { TestBed } from '@angular/core/testing';

import { TheMealDbApiService } from './the-meal-db-api.service';

describe('TheMealDbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheMealDbApiService = TestBed.get(TheMealDbApiService);
    expect(service).toBeTruthy();
  });
});
