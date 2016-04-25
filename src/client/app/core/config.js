'use strict';

var core = {};

core.toastrConfig = toastrConfig;

toastrConfig.$inject = ['toastr'];
/* @ngInject */
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

core.config = config();

function config() {
    return {
        appErrorPrefix: '[ng-base Error] ',
        appTitle: 'ng-base',
        unknownImageSource: null,
        cdnBasePath: '/'
    };
}

core.configure = configure;

configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
/* @ngInject */
function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({docTitle: config.appTitle + ': '});
}

module.exports = core;
