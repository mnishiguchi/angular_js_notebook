(function() {

  var myApp = angular.module("myApp", []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  myApp.controller(
    "AppController",
    function() {
      // Empty.
    }
  );


  myApp.directive(
    "otSite",
    function( MultiTranscludeFactory ) {

      return {
        scope: {},
        transclude: true,
        templateUrl: "site-layout.html",

        link: function(scope, iElem, iAttrs, ctrl, transcludeFn) {
          MultiTranscludeFactory.call( iElem, transcludeFn );
        }
      };

    } // end function
  );


  myApp.factory(
    "MultiTranscludeFactory",
    function() {

      return {
        call: function(iElem, transcludeFn) {

          transcludeFn( function( clone ) {

            angular.forEach( clone, function(cloneEl) {

              console.log(cloneEl.attributes);

              // Node type 3 is "text" node
              if (cloneEl.nodeType !== 3) {

                // Get target name from clone
                var destId = cloneEl.dataset.transcludeTo;

                console.log("destId: " + destId);
                console.log(iElem);

                // Find target
                var dest = iElem.find("[transclude-id='" + destId + "']");

                console.log(dest);

                // Append target if found
                if (dest.length) {

                  dest.append(cloneEl);

                } else {
                  // if target isn't found (missing/invalid transclude),
                  // clean up and throw error

                  cloneEl.remove();

                  throw new Error(
                    "Target not found. Please specify the correct transclude-to attribute."
                  );
                }
              } // end if
            });
          });
        }
      };
    } // end function
  );

})();

