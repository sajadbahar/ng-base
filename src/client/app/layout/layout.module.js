'use strict';

var shellController = require('./shell.controller');
var sidebarController = require('./sidebar.controller');
var htTopNav = require('./ht-top-nav.directive');
var htSidebar = require('./ht-sidebar.directive');

var name = 'app.layout';
var mod = angular.module(name, ['app.core'])
    .controller('ShellController', shellController)
    .controller('SidebarController', sidebarController)
    .directive('htTopNav', htTopNav)
    .directive('htSidebar', htSidebar);

module.exports = mod;
