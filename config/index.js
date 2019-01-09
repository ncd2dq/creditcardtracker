'use strict';

// Requires the configuration based on what env we are in
// and exports that config
var env = process.env.NODE_ENV || 'development';
var config = require(`./${env}`);

module.exports = config;
