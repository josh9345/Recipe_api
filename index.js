const express = require('express')
const app = express();
const parser = require('body-parser')
const routes = require('./routes/index')
var cors = require('cors');


app.use(cors());


app.use(parser.json());
app.use('/', routes)

// app.listen(3000, () => console.log('listening on port 3000'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});