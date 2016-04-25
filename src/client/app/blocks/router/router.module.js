/* global -name */

'use strict';

require('angular-ui-router');
require('../logger/logger.module');
require('../../analytics/analytics.module');
var routerHelperProvider = require('./router-helper.provider');

var name = 'blocks.router';

var mo = angular.module(name, [
    'ui.router',
    'blocks.logger',
    'app.analytics'
  ])
  .provider('routerHelper', routerHelperProvider);

module.exports = mo;
