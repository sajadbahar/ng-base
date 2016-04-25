'use strict';

var logger = require('./logger');

var name = 'blocks.logger';

var mo = angular.module(name, [])
    .factory('logger', logger);

module.exports = mo;
