(function() {
  'use strict';

  angular
    .module('client')
    .directive('headerino', headerino);

  /** @ngInject */
  function headerino() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/head/head.html'
    };

    return directive;
  }

})();
