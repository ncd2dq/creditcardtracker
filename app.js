'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const session    = require('express-session');
const config = require('./config'); //Requiring a whole folder looks for index.js
const PORT = config.port;
const app = express();
const routes = require('./src/server/routes');

app.use(bodyParser.json());

// Set up sessions for persistent login
app.use(session({
  secret: config.sessionSecret,
}));

routes(app);

if (config.env === 'development') {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
} else {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = app;
