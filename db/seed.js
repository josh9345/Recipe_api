const data = require('./csvjson.json')
const recipe = require('../models/Recipes')

// as of right now the urls for the recipes do not work this is a problem with the datasets host website.

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
        Fat: item.Fat,
        SaturatedFat: item.SaturatedFat,
        Carbohydrates: item.Carbohydrates,
        Sugar: item.Sugar,
        Cholesterol: item.Cholesterol,
        Sodium: item.Sodium,
        Protein: item.Protien,
    }
    return recipes
})

recipe.remove({}).then(() =>{
recipe.create(recipeData).then(recipes=>{
    console.log(recipes)
    })
});