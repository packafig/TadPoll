const express = require('express');
const path = require('path');
const app = express();
const dbMethods = require('../database/databaseMethods');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

app.use(express.static(path.join(__dirname, './../')));



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
app.post('/', (req, res) => {
  console.log('its working yandri!');
});




//this starts the webpack-dev-server instead of having to start it manually.
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
}).listen(8080, 'localhost', (err, result) => {
  if (err) {
    console.log(err)
  }
  console.log('running webpack')
})
