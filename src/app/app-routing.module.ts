import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheMealDbRecipeComponent } from './the-meal-db-recipe/the-meal-db-recipe.component';
import { TheMealDbSearchComponent } from './the-meal-db-search/the-meal-db-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/the-meal-db-search', pathMatch: 'full' },
  { path: 'the-meal-db-search', component: TheMealDbSearchComponent },
  { path: 'recipe/:idMeal', component: TheMealDbRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
