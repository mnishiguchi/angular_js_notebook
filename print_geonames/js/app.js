/*
main javascript file for print_geoname app
*/

//(function() {

  var app = angular.module('myApp', []);
  app.controller('MainController', function($scope, $http) {

  var url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=ja&username=mnishiguchi";

  $http.get(url)
    .success(function(response) {
      $scope.details = response.geonames;
          console.log(response.geonames);
      });
    });

//})();
