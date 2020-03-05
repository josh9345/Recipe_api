# Getting started

### This api allows you to serch and pull recipe data from over 15,000 unique dishes. you can pull all dat or search by values such as individual ingredients and name of the dish you are looking for.

# Url and Paths

## GET
### /
### router.get('/name/:name', Recipe.showName)
### router.get('/id/:id', Recipe.showid)
### router.get('/ingredients/:ingredients', Recipe.ShowIng)
### router.get('/dishType/:dishType', Recipe.showDish)
### router.post('/', Recipe.create)
