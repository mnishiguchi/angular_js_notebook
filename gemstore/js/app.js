// Wrappint our JavaScript in a closure is a good habit
(function() {

  var app = angular.module("gemStore", []);

  app.controller("StoreController", function() {
    this.products = gems;
  });

  var gems = [
    {
      name:  "Dodecahedron",
      price: 2.95,
      description: "Dodekai hedoro",
      canPurchase: true,
      soldOut:     false,
    },
    {
      name:  "Pentagonal gem",
      price: 5.95,
      description: "gokakkei no houseki",
      canPurchase: true,
      soldOut:     false,
    },
  ];

})();
