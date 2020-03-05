const Recipe = require('../models/Recipes')

module.exports = {
  index: (req, res) => {
    Recipe.find({})
      .then(recipe => {
        res.json(recipe)
      })
  },
  ShowIng: (req, res) =>{
    Recipe.find({ingredients: req.params.ingredients.toLowerCase()})
        .then(recipe => {
            res.json(recipe)
        })
  },
  showDish: (req, res) =>{
    Recipe.find({dishTypes: req.params.dishType.toLowerCase()})
        .then(recipe => {
            res.json(recipe)
        })
  },
  showid: (req, res) => {
    Recipe.find({_id: req.params.id})
      .then(recipe => {
        res.json(recipe)
      })
  },
  showName: (req, res) => {
    Recipe.find({title: req.params.name.toLowerCase()})
      .then(recipe => {
        res.json(recipe)
      })
  },
  create: (req, res) => {
    Recipe.create(req.body)
      .then(recipe => {
        res.json(recipe)
      })
  }
}
