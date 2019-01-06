(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Cheeker";
  $scope.stateOfBeing = "thinking";

  $scope.sayMessage = function () {
    return "I am not happy!";
  };

  $scope.makehimhappy = function () {
    $scope.stateOfBeing = "happy";
  };
}

})();
