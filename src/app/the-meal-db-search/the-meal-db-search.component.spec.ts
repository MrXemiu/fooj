import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealDbSearchComponent } from './the-meal-db-search.component';

describe('TheMealDbSearchComponent', () => {
  let component: TheMealDbSearchComponent;
  let fixture: ComponentFixture<TheMealDbSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMealDbSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMealDbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
