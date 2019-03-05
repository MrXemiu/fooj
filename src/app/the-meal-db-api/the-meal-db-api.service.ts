import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Meal, Category } from './dtos';
import { CategoryListSerializer } from './category-list-serializer';
import { AreaListSerializer } from './area-list-serializer';
import { IngredientListSerializer } from './ingredient-list-serializer';

@Injectable({
  providedIn: 'root'
})
export class TheMealDbApiService {
  apibase = 'https://www.themealdb.com/api/json/v1/1/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) {}
  public getMealByName(name: string): Observable<Meal[]> {
    const endpoint = 'search.php?s';
    return this.httpClient.get<Meal[]>(`${this.apibase}/${endpoint}=${name}`);
  }
  public getMealByById(id: number): Observable<Meal[]> {
    const endpoint = 'lookup.php?i';
    return this.httpClient.get<Meal[]>(`${this.apibase}/${endpoint}=${id}`);
  }
  public getRandomMeal(): Observable<Meal> {
    const endpoint = 'random.php';
    return this.httpClient.get<Meal>(`${this.apibase}/${endpoint}`);
  }
  public getAllMealCategories(): Observable<Category[]> {
    const endpoint = 'categories.php';
    return this.httpClient.get<Category[]>(`${this.apibase}/${endpoint}`);
  }
  public getLatestMeals(): Observable<Meal[]> {
    const endpoint = 'latest.php';
    return this.httpClient.get<Meal[]>(`${this.apibase}/${endpoint}`);
  }
  public listAllCategories(): Observable<string[]> {
    const endpoint = 'list.php?c=list';
    const serializer = new CategoryListSerializer();
    return this.httpClient
      .get<Category[]>(`${this.apibase}/${endpoint}`)
      .pipe(map(data => data.map(item => serializer.fromJson(item))));
  }
  public listAllAreas(): Observable<string[]> {
    const endpoint = 'list.php?a=list';
    const serializer = new AreaListSerializer();
    return this.httpClient
      .get<Category[]>(`${this.apibase}/${endpoint}`)
      .pipe(map(data => data.map(item => serializer.fromJson(item))));
  }
  public listAllIngredients(): Observable<string[]> {
    const endpoint = 'list.php?i=list';
    const serializer = new IngredientListSerializer();
    return this.httpClient
      .get<Category[]>(`${this.apibase}/${endpoint}`)
      .pipe(map(data => data.map(item => serializer.fromJson(item))));
  }
  public filterByMainIngredient(ingredient: string): Observable<Meal[]> {
    const endpoint = 'filter.php?i';
    return this.httpClient.get<Meal[]>(
      `${this.apibase}/${endpoint}=${ingredient}`
    );
  }
  public filterByCategory(category: string): Observable<Meal[]> {
    const endpoint = 'filter.php?c';
    return this.httpClient.get<Meal[]>(
      `${this.apibase}/${endpoint}=${category}`
    );
  }
  public filterByArea(area: string): Observable<Meal[]> {
    const endpoint = 'filter.php?a';
    return this.httpClient.get<Meal[]>(`${this.apibase}/${endpoint}=${area}`);
  }
}
