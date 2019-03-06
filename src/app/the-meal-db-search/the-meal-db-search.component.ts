import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal, Meals } from '../the-meal-db-api/dtos';
import { TheMealDbApiService } from '../the-meal-db-api/the-meal-db-api.service';
import { TheMealDbSearchVm } from './the-meal-db-searchVm';
import { MatSelectChange } from '@angular/material';
import { filter } from 'rxjs/operators';
import { empty, of } from 'rxjs';

@Component({
  selector: 'app-the-meal-db-search',
  templateUrl: './the-meal-db-search.component.html',
  styleUrls: ['./the-meal-db-search.component.less']
})
export class TheMealDbSearchComponent implements OnInit {
  viewModel = new TheMealDbSearchVm();

  constructor(private mealDbApiService: TheMealDbApiService) {}

  ngOnInit() {
    this.viewModel.listBy = 'category';
    this.viewModel.recipes$ = empty();
    this.listByChanged();
  }

  executeSearch() {
    this.viewModel.recipes$ = this.mealDbApiService.getMealByName(
      this.viewModel.searchTerm
    );
  }

  listByChanged() {
    this.viewModel.listOptionsEnabled = false;
    switch (this.viewModel.listBy) {
      case 'category':
        this.mealDbApiService.listAllCategories().subscribe(categories => {
          this.viewModel.options = categories.sort();
          this.viewModel.listOptionsEnabled = true;
        });
        break;
      case 'ingredient':
        this.mealDbApiService.listAllIngredients().subscribe(ingredients => {
          this.viewModel.options = ingredients.sort();
          this.viewModel.listOptionsEnabled = true;
        });
        break;
      case 'region':
        this.mealDbApiService.listAllAreas().subscribe(areas => {
          this.viewModel.options = areas.sort();
          this.viewModel.listOptionsEnabled = true;
        });
        break;
    }
  }

  filterSelectionChanged(value) {
    this.filterMeals(value);
  }

  filterMeals(filterString: string) {
    switch (this.viewModel.listBy) {
      case 'category':
        this.viewModel.recipes$ = this.mealDbApiService.filterByCategory(
          filterString
        );
        break;
      case 'ingredient':
        this.viewModel.recipes$ = this.mealDbApiService.filterByMainIngredient(
          filterString
        );
        break;
      case 'region':
        this.viewModel.recipes$ = this.mealDbApiService.filterByArea(
          filterString
        );
        break;
    }
  }
}
