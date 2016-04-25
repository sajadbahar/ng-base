'use strict';

require('./shell.html');

module.exports = ShellController;

ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
/* @ngInject */
function ShellController($rootScope, $timeout, config, logger) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    $rootScope.showSplash = true;
    console.log(config);
    vm.navline = {
        title: config.appTitle,
        text: 'Created by',
        link: 'http://twitter.com/john_papa'
    };

    activate();

    function activate() {
        logger.success('loaded!', null);
        hideSplash();
    }

    function hideSplash() {
        // FIXME: remove timeout
        //Force a 1 second delay so we can see the splash.
        $timeout(function() {
            $rootScope.showSplash = false;
        }, 1000);
    }
}
