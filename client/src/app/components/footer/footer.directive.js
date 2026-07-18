(function() {
  'use strict';

  angular
    .module('client')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/footer/footer.html'
    };

    return directive;
  }

})();
