angular.module('developer-toolkit')
  .controller('Navbar', ['$scope','$location', function ($scope,$location) {

    $scope.isActive = function(path){
      return $location.path() == path;
    }

    $scope.navTo = function(path){
      $location.path(path);
    }

  }]);