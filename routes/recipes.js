const express = require('express')
const router = express.Router();
const Recipe = require('../controllers/recipes')

router.get('/', Recipe.index)
router.get('/year/:name', Recipe)
router.get('/id/:id', Recipe)
router.post('/', Recipe.create)

module.exports = router