'use strict';

require('../core/core.module');
var analyticsService = require('./analytics.service');

var name = 'app.analytics';

var mo = angular.module(name, [
    'app.core'
  ])
    .factory('Analytics', analyticsService);

module.exports = mo;
