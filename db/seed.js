const data = require('./csvjson.json')
const recipe = require('../models/Recipes')


const recipeData = data.map(item =>{
    const recipes = {
        title: item.title,
        pricePerServing: item.pricePerServing,
        weightPerServing: item.weightPerServing,
        vegetarian: item.vegetarian,
        veryPopular: item.veryPopular,
        readyInMinutes: item.readyInMinutes,
        spoonacularSourceUrl: item.spoonacularSourceUrl,
        image: item.image,
        dishTypes: item.dishTypes.split(','),
        ingredients: item.ingredients.split(','),
        calories: item.calories,
        ["Fat/g"]: item.Fat/g,
        ["Saturated-Fat/g"]: item.Saturated-Fat/g,
        ["Carbohydrates/g"]: item.Carbohydrates/g,
        ["Sugar/g"]: item.Sugar/g,
        ["Cholesterol/mg"]: item.Cholesterol/mg,
        ["Sodium/mg"]: item.Sodium/mg,
        ["Protein/g"]: item.,
    }
    return recipes
})

recipe.remove({})
recipe.create(data).then(recipes=>{
    console.log(recipes)
})