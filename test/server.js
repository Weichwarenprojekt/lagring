const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const port = 4444;

app.use(webpackDevMiddleware(compiler, {serverSideRender: true}))
    .use((req, res) => {
        res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Test</title>
          <script src="lagring.js"></script>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>`)
    });

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});