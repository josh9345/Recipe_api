# Getting started

### This api allows you to serch and pull recipe data from over 15,000 unique dishes. you can pull all dat or search by values such as individual ingredients and name of the dish you are looking for.

# Url and Paths

## GET
###  Note: the request parameters are not case sensitive!
### base url: http://localhost:3000/recipes
### /recipes: this path returns all available recipe
### /recipes/name/{name}: this path allows you to search for dishes by their specific name. ex: http://localhost:3000/recipes/name/Fried%20Anchovies%20with%20Sage.
### /recipes/id/{id}: this path fetches recipes by the its unique id.
### /recipes/ingredients/{ingredients}: this path fetches recipes based on whether or not the specified ingredient is present in the recipe. ex:http://localhost:3000/recipes/ingredients/anchovies
### /recipes/dishType/{dishType}: this fetches recipes based on the type of dish. ex: http://localhost:3000/recipes/dishType/lunch

