'use strict';

var cdnImg = require('./cdn-img.directive');
var htWidgetHeader = require('./ht-widget-header.directive');

var name = 'app.widgets';

var mod = angular
    .module(name, [])

    .directive('htWidgetHeader', htWidgetHeader)
    .directive('cdnImg', cdnImg);

module.exports = mod;
