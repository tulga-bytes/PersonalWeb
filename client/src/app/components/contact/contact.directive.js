(function() {
  'use strict';

  angular
    .module('client')
    .directive('contact', contact);

  /** @ngInject */
  function contact() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/contact/contact.html'
    };

    return directive;
  }

})();
