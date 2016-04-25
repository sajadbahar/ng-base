'use strict';

var name = 'app.authentication';
var AuthInterceptor = require('./authentication.srv');

var mo = angular.module(name, [])
    .config(configure)
    .factory('AuthInterceptor', AuthInterceptor);

configure.$inject = ['$httpProvider'];
/* @ngInject */
function configure($httpProvider) {
    // configure $http requests according to authentication
    $httpProvider.interceptors.push('AuthInterceptor');
}

module.exports = mo;
