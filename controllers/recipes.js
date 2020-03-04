const express = require('express')
const router = express.Router();
const Recipe = require('../controllers/recipes')

router.get('/', Recipe.index)
router.get('/year/:year', Recipe.showYear)
router.get('/:name', Recipe.showName)
router.post('/', Recipe.create)

module.exports = router