const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HarryPotter', {useNewUrlParser: true});
module.exports = mongoose;