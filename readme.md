# Getting started

### This api allows you to serch and pull recipe data from over 15,000 unique dishes. you can fetch all data or search by values such as individual ingredients and name of the dish you are looking for.

# Url and Paths

## GET
###  Note: the request parameters are not case sensitive!
### base url: http://localhost:3000/recipes
### /recipes
### this path returns all available recipe
### /recipes/name/{name}
### this path allows you to search for dishes by their specific name. ex: http://localhost:3000/recipes/name/Fried%20Anchovies%20with%20Sage.
### /recipes/id/{id}
### this path fetches recipes by the its unique id.
### /recipes/ingredients/{ingredients} 
### this path fetches recipes based on whether or not the specified ingredient is present in the recipe. ex:http://localhost:3000/recipes/ingredients/anchovies
### /recipes/dishType/{dishType}
### this fetches recipes based on the type of dish. ex: http://localhost:3000/recipes/dishType/lunch

## POST
### url: http://localhost:3000/recipes.
### This method allows you to enter your very own recipe data to this database! 
### Example format for data being created: 
###   {
###   title: String,
###   pricePerServing: Number,
###   weightPerServing: Number,
###   vegetarian: Boolean,
###   veryPopular: Boolean,
###   readyInMinutes: Number,
###   spoonacularSourceUrl: String,
###   image: String,
###   dishTypes: [String],
###   ingredients: [String],
###   calories: Number,
###   Fat: Number,
###   SaturatedFat: Number,
###   Carbohydrates: Number,
###   Sugar: Number,
###   Cholesterol: Number,
###   Sodium: Number,
###   Protein: Number,
###   }

# Authentication
### none required.

# Examples
### http://localhost:3000/recipes/name/Fried%20Anchovies%20with%20Sage  will return
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

