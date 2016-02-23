const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

const pickOne = require('pick-one');
const motivations = require('motivations');

app.get('/', function(request, response) {
  var motivation = pickOne(motivations);
  var image = pickOne([1, 2, 3, 4]);
  response.render('motivation', { motivation, image });
});

module.exports = app;
