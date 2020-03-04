const express = require('express')
const app = express();
const parser = require('body-parser')
const routes = require('./routes/index')



app.use(parser.json());
app.use('/', routes)

app.listen(3000, () => console.log('listening on port 3000'))