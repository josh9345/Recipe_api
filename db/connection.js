const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Recipes', {useNewUrlParser: true});
module.exports = mongoose;