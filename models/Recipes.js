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
    ["Fat/g"]: Number,
    ["Saturated-Fat/g"]: Number,
    ["Carbohydrates/g"]: Number,
    ["Sugar/g"]: Number,
    ["Cholesterol/mg"]: Number,
    ["Sodium/mg"]: Number,
    ["Protein/g"]: Number,
})

module.exports = mongoose.model('Recipes', recipes)