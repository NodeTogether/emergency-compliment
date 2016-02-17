const express = require('express');
const app = express();

app.get('/', function(request, response) {
  var compliment = "hey i like your shoes"
  response.send(compliment);
});

module.exports = app;
