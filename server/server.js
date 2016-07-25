const express = require('express');
const path = require('path');
const app = express();
const dbMethods = require('../Database/databaseMethods');

app.use(express.static(path.join(__dirname, './../')));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
