import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealDbRecipeComponent } from './the-meal-db-recipe.component';

describe('TheMealDbRecipeComponent', () => {
  let component: TheMealDbRecipeComponent;
  let fixture: ComponentFixture<TheMealDbRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMealDbRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMealDbRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
