const express = require('express')
const router = express.Router();
const Recipe = require('../controllers/recipes')

router.get('/', Recipe.index)
router.get('/name/:name', Recipe.showName)
router.get('/id/:id', Recipe.showid)
router.get('/ingredients/:ingredients', Recipe.ShowIng)
router.get('/dishType/:dishType', Recipe.showDish)


module.exports = router