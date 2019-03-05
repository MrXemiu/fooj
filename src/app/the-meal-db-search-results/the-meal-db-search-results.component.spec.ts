import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealDbSearchResultsComponent } from './the-meal-db-search-results.component';

describe('TheMealDbSearchResultsComponent', () => {
  let component: TheMealDbSearchResultsComponent;
  let fixture: ComponentFixture<TheMealDbSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMealDbSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMealDbSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
