var app = angular.module( 'myApp', [] );

// app.config(function($httpProvider) {
//     //Enable cross domain calls
//     $httpProvider.defaults.useXDomain = true;

//     //Remove the header used to identify ajax call  that would prevent CORS from working
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });

app.controller( 'MainController', function( $scope, $http ) {

    var pendingTask;

    if ($scope.search === undefined) {
      $scope.search = "Ninja";
      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      alert("fetch() was called");

      // http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemSearch.html

      // sample url for videos - working
      // $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")

      // var url = 'http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q'
      // + '&AssociateTag=%22mnishiguchi-20%22'
      // + '&Keywords=' + 'harry%20potter'
      // + '&Operation=ItemSearch'
      // + '&SearchIndex=Books'
      // + '&Service=AWSECommerceService'
      // + '&Timestamp=' + '2015-11-12T00%3A39%3A37.000Z' //  + new Date().toISOString()
      // + '&Version=2011-08-01'
      // + '&Signature=' + 'LFjNUVPVriac3Fnq%2BcwW%2Bg%2BN2Q9qBc962YxnwEEzK4I%3D';

      /*
      Access-Control-Allow-Headers: Content-Type
      Access-Control-Allow-Methods: GET, POST, OPTIONS
      Access-Control-Allow-Origin: *
      */

      //$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      var url = "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q&AssociateTag=PutYourAssociateTagHere&Keywords=harry%20potter&Operation=ItemSearch&SearchIndex=Books&Service=AWSECommerceService&Timestamp=2015-11-12T00%3A39%3A37.000Z&Version=2011-08-01&Signature=LFjNUVPVriac3Fnq%2BcwW%2Bg%2BN2Q9qBc962YxnwEEzK4I%3D";
      $http.get(url, {
          headers: {
            'X-Requested-With' : 'XMLHttpRequest'
          }
        })
      // $http.get(url)
        .success(function(response) {
            $scope.details = response;
            alert("fetch success");
        }).error(function(data, status, headers, config) {
            alert("fetch fail");
        });
    }
  });
