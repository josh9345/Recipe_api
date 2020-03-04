const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const recipes = new Schema({
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
})

module.exports = mongoose.model('Recipes', recipes)