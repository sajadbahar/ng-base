(function() {
    'use strict';

    angular.module('app.authentication', [])
        .config(configure);

    configure.$inject = ['$httpProvider'];
    /* @ngInject */
    function configure($httpProvider) {
        // configure $http requests according to authentication
        $httpProvider.interceptors.push('AuthInterceptor');
    }

})();
