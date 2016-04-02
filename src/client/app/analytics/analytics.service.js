(function (angular) {
    'use strict';

    angular
        .module('app.analytics')
        .factory('Analytics', Analytics);

    Analytics.$inject = [];
    /* @ngInject */
    function Analytics() {
        // Trigger Event, Call View or ...  over service like Segment, MixPanel, .....
        var service = {
            track: track,
            view: view
        };
        return service;

        function track() {
            console.log('TRACK');
        }

        function view(page) {
            console.log('VIEW', page);
        }

    }
})(window.angular);
