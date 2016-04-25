'use strict';

var adminController = require('./admin.controller');

var name = 'app.admin';

var mo = angular
  .module(name, [
    'app.core',
    'app.widgets'
  ])
  .controller('AdminController', adminController);

module.exports = mo;
