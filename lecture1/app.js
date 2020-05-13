(function () {
  'use strict';
  angular.module('nameCalculator', [])

  .controller('nameCalculatorController', function($scope){
      $scope.name = "";
      $scope.totalNumericValue = 0;
      $scope.displayNumeric = function(){
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalNumericValue = totalNameValue;
      };

      function calculateNumericForString(string){
        var tortalStringValue = 0;
        for(var i=0; i<string.length; i++){
          tortalStringValue += string.charCodeAt(i);
        }
        return tortalStringValue;
      }
    });

})();
