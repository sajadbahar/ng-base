'use strict';

var dashboardController = require('./dashboard.controller');

var name = 'app.core';

var mo = angular
    .module('app.dashboard', [
        'app.core',
        'app.widgets'
    ])
    .controller('DashboardController', dashboardController);

module.exports = mo;
