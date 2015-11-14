(function() {
  var app = angular.module('gemStore', []);

  function StoreController() {
    // A collection of products, initially set to data fetched from an API
    this.products = gems;
  }

  app.controller('StoreController', StoreController);

  /*** Directives ***/

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery',
      controller: function() {
        // Current index of the gallery
        this.current = 0;

        // Set the gallery's index
        this.setCurrent = function(index){
          this.current = index;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs',
      controller: function(){
        // Current position of the tabs, initially 1
        this.tab = 1;

        // Set the tab position
        this.setTab = function(tab) {
          this.tab = tab;
        };

        // Check if a tab is active
        this.isSet = function(tab) {
          return (this.tab === tab);
        };
      },
      controllerAs: 'tabs'
    };
  });

  app.directive('productReviewForm', function() {
    return {
      bindToController: {
        product: '='
      },
      restrict: 'E',
      templateUrl: 'product-review-form',
      controller: function() {
        // Current state of the review field
        this.review = {}; // Bound to the fields

        // Called when user submits the review
        this.addReview = function(product){
          product.reviews.push(this.review);  // Add the review
          this.review = {};                   // Clear the fields
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

  // Represents hypothetical data fetched from an API
  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [
        {
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }
      ]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [
      {
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];

})();
