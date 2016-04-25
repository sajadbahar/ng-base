'use strict';

require('angular-animate');
require('angular-sanitize');
require('angular-resource');
require('extras.angular.plus/ngplus-overlay');
require('angular-ui-router');
require('../blocks/exception/exception.module');
require('../blocks/logger/logger.module');
require('../blocks/router/router.module');

var config = require('./config');
var dataservice = require('./dataservice');

var name = 'app.core';

var mo = angular
    .module(name, [
        'ngAnimate', 'ngSanitize',
        'blocks.exception', 'blocks.logger', 'blocks.router',
        'ui.router', 'ngplus', 'ngResource'
    ])
    .config(config.configure)
    .constant('config', config.config)
    .factory('dataservice', dataservice);

module.exports = mo;
