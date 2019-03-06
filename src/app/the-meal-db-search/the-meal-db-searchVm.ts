import { Observable } from 'rxjs';
import { Meals, Meal } from '../the-meal-db-api/dtos';

export class TheMealDbSearchVm {
  recipes$: Observable<Meal[]>;
  searchTerm: string;
  listBy: string;
  options: string[] = [];
  listOptionsEnabled: boolean;
}
