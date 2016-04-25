'use strict';

module.exports = htWidgetHeader;
var templateUrl = require('./widget-header.html');

/* @ngInject */
function htWidgetHeader() {
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var directive = {
        scope: {
            'title': '@',
            'subtitle': '@',
            'rightText': '@',
            'allowCollapse': '@'
        },
        templateUrl: templateUrl,
        restrict: 'EA'
    };
    return directive;
}
