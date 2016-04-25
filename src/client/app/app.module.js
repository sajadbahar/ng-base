'use strict';

require('angular');
require('./core/core.module');
require('./widgets/widgets.module');
require('./authentication/authentication.module');
require('./layout/layout.module');

require('bootstrap/less/bootstrap.less');
require('font-awesome/less/font-awesome.less');
require('toastr/toastr.css');

angular.module('app', [
        require('oclazyload'),
        'app.core',
        'app.widgets',
        'app.authentication',
        'app.layout'
    ])
    .run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'dashboard',
            config: {
                url: '/',
                controller: 'DashboardController',
                controllerAs: 'vm',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                },
                templateProvider: ['$q', function($q) {
                    var deferred = $q.defer();

                    require.ensure([], function() {
                        var template = require('html!./dashboard/dashboard.ejs');
                        deferred.resolve(template);
                    });
                    return deferred.promise;
                }],
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function() {
                        var mod = require('./dashboard/dashboard.module');
                        $ocLazyLoad.load({
                            name: mod.name
                        });

                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            }
        },
        {
            state: 'admin',
            config: {
                url: '/admin',
                controller: 'AdminController',
                controllerAs: 'vm',
                title: 'Aashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-admin"></i> Admin'
                },
                templateProvider: ['$q', function($q) {
                    var deferred = $q.defer();

                    require.ensure([], function() {
                        var template = require('html!./admin/admin.ejs');
                        deferred.resolve(template);
                    });
                    return deferred.promise;
                }],
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function() {
                            var mod = require('./admin/admin.module');
                            $ocLazyLoad.load({
                                name: mod.name
                            });

                            deferred.resolve(mod.controller);
                        });

                    return deferred.promise;
                }]
            }
        }
    ];
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
