# Josh's Recipe API!

This API was built to be simple and easy to use, so anyone has access to over 15,00 recipes. with the ability to search by ingredient, unique id, and The type of dish. this was built using mongoose, express, node.js, and JSON for storing the data.

# Getting started

url: https://josh-recipe-api.herokuapp.com/recipes
this will display all recipes. (see routes below for specific search parameters)

# bugs and errors

1. there is a recipe that contains every ingredient so it shows up on every search.

# Url and Paths

### GET

Note: the request parameters are not case sensitive!
base url: https://josh-recipe-api.herokuapp.com/recipes
/recipes
this path returns all available recipes
/recipes/name/{name}
this path allows you to search for dishes by their specific name. ex: https://josh-recipe-api.herokuapp.com/recipes/name/Fried%20Anchovies%20with%20Sage.
/recipes/id/{id}
this path fetches recipes by the its unique id.
/recipes/ingredients/{ingredients}
this path fetches recipes based on whether or not the specified ingredient is present in the recipe. ex:https://josh-recipe-api.herokuapp.com/recipes/ingredients/anchovies
/recipes/dishType/{dishType}
this fetches recipes based on the type of dish. ex: https://josh-recipe-api.herokuapp.com/recipes/dishType/lunch

### POST

url: https://josh-recipe-api.herokuapp.com/recipes.
This method allows you to enter your very own recipe data to this database!
Example format for data being created:
{
title: String,
pricePerServing: Number,
weightPerServing: Number,
vegetarian: Boolean,
veryPopular: Boolean,
readyInMinutes: Number,
spoonacularSourceUrl: String,
image: String,
dishTypes: [String],
ingredients: [String],
calories: Number,
Fat: Number,
SaturatedFat: Number,
Carbohydrates: Number,
Sugar: Number,
Cholesterol: Number,
Sodium: Number,
Protein: Number,
}

# Technologies used

1. Mongoose
2. express
3. node.js
4. JSON

# Examples

https://josh-recipe-api.herokuapp.com/recipes/name/Fried%20Anchovies%20with%20Sage will return

```
[
  {
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "ingredients": [
      "anchovies",
      "baking powder",
      "egg",
      "flour",
      "sage leaves",
      "salt",
      "seltzer water",
      "vegetable oil"
    ],
    "_id": "5e610a31ef920d7c331a91df",
    "title": "fried anchovies with sage",
    "weightPerServing": 226,
    "vegetarian": false,
    "veryPopular": false,
    "readyInMinutes": 45,
    "spoonacularSourceUrl": "https://spoonacular.com/fried-anchovies-with-sage-1",
    "image": "https://spoonacular.com/recipeImages/1-556x370.jpg",
    "calories": 384.09,
    "Fat": 10.53,
    "SaturatedFat": 3.6,
    "Carbohydrates": 32.53,
    "Sugar": 0.17,
    "Cholesterol": 145.28,
    "Sodium": 955.48,
    "__v": 0
  }
]
```
