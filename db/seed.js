const data = require('./csvjson.json')
const recipe = require('../models/Recipes')

recipe.remove({})
recipe.create(data).then(recipes=>{
    console.log(recipes)
})