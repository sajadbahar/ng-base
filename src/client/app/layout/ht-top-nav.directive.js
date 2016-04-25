'use strict';

module.exports = htTopNav;
var templateUrl = require('./ht-top-nav.html');

/* @ngInject */
function htTopNav () {
    var directive = {
        bindToController: true,
        controller: TopNavController,
        controllerAs: 'vm',
        restrict: 'EA',
        scope: {
            'navline': '='
        },
        templateUrl: templateUrl
    };

    /* @ngInject */
    function TopNavController() {
        var vm = this;
    }

    return directive;
}
