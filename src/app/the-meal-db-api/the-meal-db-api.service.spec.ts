import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TheMealDbApiService } from './the-meal-db-api.service';

describe('TheMealDbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheMealDbApiService = TestBed.get(TheMealDbApiService);
    expect(service).toBeTruthy();
  });

  // it('#getMealByName should return value from observable',
  // (done: DoneFn) => {
  //   service.getMealByName('Arrabiata').subscribe(value => {
  //     expect(value).toBeTruthy();
  //     expect(value.length).toBe(1);
  //     expect(value[0].strMeal).toBe('Spicy Arrabiata Penne');
  //     done();
  //   }););
});
