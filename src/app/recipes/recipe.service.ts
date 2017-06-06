import {EventEmitter} from '@angular/core';

import { Recipe } from "app/recipes/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
        new Recipe('Another Test Recipe','This is simply a test','http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png')
    ];

  getRecipes(){
      return this.recipes.slice();
  }
}