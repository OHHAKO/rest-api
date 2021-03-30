let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes'); //import route
routes(app); //register routeS

app.listen(port);

console.log('Sample RESTful API server started on: ' + port);