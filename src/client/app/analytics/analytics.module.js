(function (angular) {
    'use strict';

    angular.module('app.analytics', [
        'app.core'
      ])
        .config(configure)
        .run(run);

    configure.$inject = [];
    /* @ngInject */
    function configure() {
        // Config analytics here, like token code if needed
    }

    run.$inject = ['$rootScope'];
    /* @ngInject */
    function run($rootScope) {
    }

})(window.angular);
