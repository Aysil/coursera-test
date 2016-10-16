(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message ="";
  $scope.CreateMessage = function () {
    var VRegExp = new RegExp(/^[ ]+/g);
    var VResult = $scope.food.replace(VRegExp, '');
    if (VResult==''){
	   $scope.message ="Please enter data first";
	   $scope.textcolor={color:'red'};
	}
	else if (VResult.split(',').length<=3){
	   $scope.message ="Enjoy!";
	   $scope.textcolor={color:'green'};
	}
	else{
	   $scope.message ="Too much!";
	   $scope.textcolor={color:'green'};
	}
  };
}

})();