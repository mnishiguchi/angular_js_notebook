angular.module( 'myApp', [] )
  .controller( 'MainController', function( $scope, $http ) {

    var pendingTask;

    if($scope.search === undefined) {
      $scope.search = "Ninja";
      fetch();
    }

    $scope.change = function() {
      if(pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      alert("fetch() was called");

      // http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemSearch.html
      var searchURL =
        "http://webservices.amazon.com/onca/xml?"
        + "Service=AWSECommerceService"
        + "&AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q"
        + "&Operation=ItemSearch"
        + "&Keywords=Rocket"
        + "&SearchIndex=Toys"
        + "&Timestamp=" + new Date().toISOString()
        + "&Signature=" + getSignatureKey("AKIAIEKR4D2NCZL7PX7Q", new Date().toISOString(),"us-east-1", "aws4_request")
      $http.get(searchURL);
        .success(function(response) {
          $scope.details = response;
          alert("fetch success");
        })
        .error(function(data, status, headers, config) {
          alert(status);
        });
    }



    // $scope.update = function(product) {
    //   $scope.search = product.Title;
    //   $scope.change();
    // };

    // $scope.select = function() {
    //   this.setSelectionRange(0, this.value.length);
    // }
  });

/**
 * Deriving the AWS Signing Key using JavaScript
 * http://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html
 */
function getSignatureKey(key, dateStamp, regionName, serviceName) {

   var kDate = Crypto.HMAC(Crypto.SHA256, dateStamp, "AWS4" + key, { asBytes: true})
   var kRegion = Crypto.HMAC(Crypto.SHA256, regionName, kDate, { asBytes: true });
   var kService =Crypto.HMAC(Crypto.SHA256, serviceName, kRegion, { asBytes: true });
   var kSigning = Crypto.HMAC(Crypto.SHA256, "aws4_request", kService, { asBytes: true });

   return kSigning;
}
