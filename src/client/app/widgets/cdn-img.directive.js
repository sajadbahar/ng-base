(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('cdnImg', cdnImg);

    cdnImg.$inject = ['config'];
    /* @ngInject */
    function cdnImg (config) {
        //Usage:
        //<img cdn-img="{{item.imageSource}}"/>
        var basePath = config.cdnBasePath;
        var unknownImage = config.unknownImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('cdnImg', function (value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }
})();
