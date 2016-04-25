'use strict';

module.exports = AdminController;

AdminController.$inject = ['logger'];
/* @ngInject */
function AdminController(logger) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
        logger.info('Activated Admin View');
    }
}
