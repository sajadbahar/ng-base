'use strict';

module.exports = AuthInterceptor;

AuthInterceptor.$inject = ['$q', '$log'];
/* @ngInject */
function AuthInterceptor($q, $log) {
    var service = {
        request: onRequest,
        response: onResponse,
        responseError: onResponseError
    };
    return service;

    function onRequest(config) {
        // add headers here if you want...
        return config;
    }

    function onResponse(response) {
        return response;
    }

    function onResponseError(response) {
        $log.warn('request error', response);
        if (response.status === 401 || response.status === 403) {
            // user is not authenticated
            $log.warn('unauthenticated user');
            // FIXME: redirect user to login page
        }
        return $q.reject(response);
    }
}
