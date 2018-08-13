/**
 *  @Module
 *  start.js
 * 
 *  @flow
 *  @prettier
 */

require('dotenv').config();

require('babel-register')({
    presets: ['env'],
})

module.exports = require('./src/server/server.js');
