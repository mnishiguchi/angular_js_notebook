/*
main javascript file for print_geoname app
*/

angular.module('myApp', [])
  .controller('MainCtrl', function($scope, $http) {

    var url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=ja&username=mnishiguchi";

    $http.get(url)
      .success(function(response) {
        $scope.details = response.geonames;
        console.log(response.geonames);
      });
  })

  .directive('topNavbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'top-navbar.html'
    };
  });
