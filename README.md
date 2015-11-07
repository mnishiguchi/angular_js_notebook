# AngularJS notebook

## Resources
- https://www.codecademy.com/en/courses/learn-angularjs

## App

```js
var app = angular.module("myApp", []);
```

## Directives
- ng-app, ng-controller, ng-repeat, ng-src, ng-click, ...
- bind behavior to HTML elements
- When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior.

## Filter
```
<p class="title">{{ product.name | uppercase }}</p>
<p class="price">{{ product.price | currency }} </p>
<p class="date">{{ product.pubdate | date }}</p>
```

## ng-repeat
```
app.controller('MainController', ['$scope', function($scope) {
  //...
  $scope.products = [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'img/the-book-of-trees.jpg'
      },
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'img/program-or-be-programmed.jpg'
      },
      //...
    ]
  //...
}]);
```

```
<div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img ng-src="{{ product.cover }}">
    <p class="title">{{ product.name | uppercase }}</p>
    <p class="price">{{ product.price | currency }} </p>
    <p class="date">{{ product.pubdate | date }}</p>
  </div>
</div>
```
