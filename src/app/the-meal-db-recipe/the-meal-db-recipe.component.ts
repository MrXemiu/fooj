import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../the-meal-db-api/dtos';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TheMealDbApiService } from '../the-meal-db-api/the-meal-db-api.service';

@Component({
  selector: 'app-the-meal-db-recipe',
  templateUrl: './the-meal-db-recipe.component.html',
  styleUrls: ['./the-meal-db-recipe.component.less']
})
export class TheMealDbRecipeComponent implements OnInit {
  @Input() meal: Meal;

  constructor(
    private route: ActivatedRoute,
    private theMealDbApiService: TheMealDbApiService
  ) {}

  ngOnInit() {
    this.getMeal();
  }

  getMeal() {
    const id = +this.route.snapshot.paramMap.get('idMeal');
    this.theMealDbApiService.getMealById(id).subscribe(meal => {
      this.meal = meal;
      this.meal.strInstructions = this.meal.strInstructions.replace(
        '\r\n',
        '</p><p>'
      );
    });
  }
}
