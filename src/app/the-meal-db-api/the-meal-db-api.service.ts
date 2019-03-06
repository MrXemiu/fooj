import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Meal, Category, Categories, Meals } from './dtos';
import { CategoryListSerializer } from './category-list-serializer';
import { AreaListSerializer } from './area-list-serializer';
import { IngredientListSerializer } from './ingredient-list-serializer';

@Injectable({
  providedIn: 'root'
})
export class TheMealDbApiService {
  public apibase = 'https://www.themealdb.com/api/json/v1/1';
  public apiEndPoints = {
    getMealByName: 'search.php?s',
    getMealById: 'lookup.php?i',
    getRandomMeal: 'random.php',
    getAllMealCategories: 'categories.php',
    getLatestMeals: 'latest.php',
    listAllCategories: 'list.php?c=list',
    listAllAreas: 'list.php?a=list',
    listAllIngredients: 'list.php?i=list',
    filterByMainIngredient: 'filter.php?i',
    filterByCategory: 'filter.php?c',
    filterByArea: 'filter.php?a'
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) {}
  public getMealByName(name: string): Observable<Meal[]> {
    return this.httpClient
      .get<Meals>(`${this.apibase}/${this.apiEndPoints.getMealByName}=${name}`)
      .pipe(map(data => data.meals));
  }
  public getMealById(id: number): Observable<Meal> {
    return this.httpClient
      .get<Meals>(`${this.apibase}/${this.apiEndPoints.getMealById}=${id}`)
      .pipe(map(data => (data.meals.length > 0 ? data.meals[0] : null)));
  }
  public getRandomMeal(): Observable<Meal> {
    return this.httpClient
      .get<Meals>(`${this.apibase}/${this.apiEndPoints.getRandomMeal}`)
      .pipe(map(data => (data.meals.length > 0 ? data.meals[0] : null)));
  }
  public getAllMealCategories(): Observable<Category[]> {
    return this.httpClient
      .get<Categories>(
        `${this.apibase}/${this.apiEndPoints.getAllMealCategories}`
      )
      .pipe(map(data => data.meals));
  }
  public getLatestMeals(): Observable<Meal[]> {
    return this.httpClient
      .get<Meals>(`${this.apibase}/${this.apiEndPoints.getLatestMeals}`)
      .pipe(map(data => data.meals));
  }
  public listAllCategories(): Observable<string[]> {
    const serializer = new CategoryListSerializer();
    return this.httpClient
      .get<Categories>(`${this.apibase}/${this.apiEndPoints.listAllCategories}`)
      .pipe(map(data => data.meals.map(item => serializer.fromJson(item))));
  }
  public listAllAreas(): Observable<string[]> {
    const serializer = new AreaListSerializer();
    return this.httpClient
      .get<Categories>(`${this.apibase}/${this.apiEndPoints.listAllAreas}`)
      .pipe(map(data => data.meals.map(item => serializer.fromJson(item))));
  }
  public listAllIngredients(): Observable<string[]> {
    const serializer = new IngredientListSerializer();
    return this.httpClient
      .get<Categories>(
        `${this.apibase}/${this.apiEndPoints.listAllIngredients}`
      )
      .pipe(map(data => data.meals.map(item => serializer.fromJson(item))));
  }
  public filterByMainIngredient(ingredient: string): Observable<Meal[]> {
    return this.httpClient
      .get<Meals>(
        `${this.apibase}/${
          this.apiEndPoints.filterByMainIngredient
        }=${ingredient}`
      )
      .pipe(map(data => data.meals));
  }
  public filterByCategory(category: string): Observable<Meal[]> {
    return this.httpClient
      .get<Meals>(
        `${this.apibase}/${this.apiEndPoints.filterByCategory}=${category}`
      )
      .pipe(map(data => data.meals));
  }
  public filterByArea(area: string): Observable<Meal[]> {
    return this.httpClient
      .get<Meals>(`${this.apibase}/${this.apiEndPoints.filterByArea}=${area}`)
      .pipe(map(data => data.meals));
  }
}
