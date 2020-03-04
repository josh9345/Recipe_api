const Recipe = require('../models/Recipes')

module.exports = {
  index: (req, res) => {
    Recipe.find({})
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
    Recipe.find({title: req.params.name})
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
