const express = require('express');
const path = require('path');
const app = express();
const dbMethods = require('../database/databaseMethods');

app.use(express.static(path.join(__dirname, './../')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
