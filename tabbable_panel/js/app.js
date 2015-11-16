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


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  myApp.directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'my-tabs.html',

      controllerAs: "vm",
      controller: ['$scope', function($scope) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        vm.addPane = function(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          panes.push(pane);
        };

      }]
    };
  });


  myApp.directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'my-pane.html'
    };
  });

})();

