var app = angular.module( 'myApp', [] )
app.controller( 'MainController', function( $scope, $http ) {

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
        "http://ecs.amazonaws.com/onca/xml?Service=AWSECommerceService"
        + "&AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q&AssociateTag=%22mnishiguchi-20%22"
        + "&Keywords=laptop"
        + "&Operation=ItemSearch"
        + "&SearchIndex=Electronics"
        + "&Service=AWSECommerceService"
        + "&Timestamp=" + new Date().toISOString()
        + "&Signature=rtb9xcLKvPzRp0KbgicvH5XN+qxp3eMksACvoolu8Y8"
      $http.get("http://ecs.amazonaws.com/onca/xml?AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q&AssociateTag=%22mnishiguchi-20%22&Keywords=laptop&Operation=ItemSearch&SearchIndex=Electronics&Service=AWSECommerceService&Timestamp=2015-11-09T13%3A53%3A21.000Z&Version=2011-08-01&Signature=rtb9xcLKvPzRp0KbgicvH5XN%2Bqxp3eMksACvoolu8Y8%3D")
        .success(function(response) {

            $scope.details = response;
            alert("fetch success");
        })
        .error(function(data, status, headers, config) {
            alert("fetch fail");
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
// function getSignatureKey(key, dateStamp, regionName, serviceName) {

//    var kDate = Crypto.HMAC(Crypto.SHA256, dateStamp, "AWS4" + key, { asBytes: true})
//    var kRegion = Crypto.HMAC(Crypto.SHA256, regionName, kDate, { asBytes: true });
//    var kService =Crypto.HMAC(Crypto.SHA256, serviceName, kRegion, { asBytes: true });
//    var kSigning = Crypto.HMAC(Crypto.SHA256, "aws4_request", kService, { asBytes: true });

//    return kSigning;
// }
