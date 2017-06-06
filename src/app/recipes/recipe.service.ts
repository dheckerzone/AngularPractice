import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe','This is simply a test',
            'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
            ),
        new Recipe(
            'Another Test Recipe','This is simply a test',
            'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ]
            )
    ];

    constructor(private slService:ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}