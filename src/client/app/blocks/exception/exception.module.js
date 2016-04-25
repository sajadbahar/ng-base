'use strict';

require('../logger/logger.module');

var name = 'blocks.exception';
var exceptionHandlerProvider = require('./exception-handler.provider');

var mo = angular.module(name, ['blocks.logger'])
    .provider('exceptionHandler', exceptionHandlerProvider.exceptionHandlerProvider)
    .config(exceptionHandlerProvider.config);

module.exports = mo;
