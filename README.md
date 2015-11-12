# AngularJS notebook

## Local server
- [http-server](https://www.npmjs.com/package/http-server)

```
$ cd project_dir/
$ http-server -o
```

==

## Resources
- [Code Academy](https://www.codecademy.com/en/courses/learn-angularjs)
- [Code School](http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro)
- [AngularJS's tutorial - あなたとともにAngularJS](http://lab.hisasann.com/AngularJSTutorial/)

==

## Creating a module

app.js
```js
/* angular: AngularJS
 * "...":   App name
 * [...]:   Dependencies (other libraries)
 */
var app = angular.module("myApp", []);
```

==

## Including the modules

index.html
```html
<!doctype html>
<html ng-app="myApp"><!-- booud to myApp -->
  <head>
    <!-- Include styles -->
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css" />
  </head>

  <body>
    <!-- Some page content -->
 
    <!-- Include AngularJS -->
    <script type="text/javascript" src="angular.min.js"></script>
    <!-- Include Modules -->
    <script type="text/javascript" src="js/app.js"></script>
    <!-- Include Controllers -->
    <script type="text/javascript" src="js/controllers/MainController.js"></script>
  </body>
</html>
```

==

## Expressions
- https://docs.angularjs.org/guide/expression

```html
<h1>{{ "Hello, " + "Angular!" }}</h1>
```

==

## Controllers
- Define our app's behavior by defining functions and values
- Wrap your JavaScript code in a closure (good practice)
- Controller is attached to our app

```js
// Wrappint our JavaScript in a closure is a good habit
(function() {

  var app = angular.module("store", []);
  app.controller("StoreController", function() {
    this.product = gem;
  });

  var gem = {
    name:  "Dodecahedron",
    price: 2.95,
    description: "Dodekai hedoro"
  }

})();
```

==

## Attaching the controller to an HTML element
- Scope of the controller is only inside of the specified element

index.html
```html
  <body>
    <!--
    Attaching the controller
    ng-controller="ControllerName as alias"
    -->
    <div ng-controller="StoreController as store">
      <h1> Product name </h1>
      <h2> $Product price </h2>
      <p>  Product description </p>
    </div>
    ...
```

==

## [Directives](https://docs.angularjs.org/guide/directive)
- ng-app, ng-controller, ng-repeat, ng-src, ng-click, ng-show, ng-hide...
- bind behavior to HTML elements
- When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior.

### [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude)
- Note:  wrap the path in single quotes: `src="'partials/structure/header.html'"`
- [Simple ng-include not working](http://stackoverflow.com/questions/22991658/simple-ng-include-not-working)

```html
<div ng-include src="'top-navbar.html'"></div>
```

### ng-repeat

E.g. Arrays of objects
```js
app.controller('MainController', ['$scope', function($scope) {
  //...
  $scope.products = [
      {
        name:    "The Book of Trees",
        price:   19,
        pubdate: new Date("2014", "03", "08"),
        cover:   "img/the-book-of-trees.jpg"
      },
      {
        name:    "Program or be Programmed",
        price:   8,
        pubdate: new Date("2013", "08", "01"),
        cover:   "img/program-or-be-programmed.jpg"
      },
      //...
    ]
  //...
}]);
```

```html
<div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img ng-src="{{ product.cover }}">
    <p class="title">{{ product.name | uppercase }}</p>
    <p class="price">{{ product.price | currency }} </p>
    <p class="date">{{ product.pubdate | date }}</p>
  </div>
</div>
```

E.g. Tables
```html
<table class="table">
  <thead>
    <tr>
      <th>NAME</th>
      <th>ROLL</th>
      <th>SUBJECT</th>
      <th>MARK</th>
      <th>AGE</th>
      <th>COUNTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="aStudent in studentList">
      <td>{{ aStudent.name }}</td>
      <td>{{ aStudent.roll }}</td>
      <td>{{ aStudent.subject }}</td>
      <td>{{ aStudent.mark }}</td>
      <td>{{ aStudent.age }}</td>
      <td>{{ aStudent.country }}</td>
    </tr>
  </tbody>
</table>
```

E.g. Custom directives
```html
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card" ng-repeat="app in apps">
      <app-info info="app"></app-info>
      <install-app></install-app>
    </div>
  </div>
</div>
```

==

## Defining a custom directive
- We can write code to teach the browser a new HTML element

js/app.js
```js
//...
app.directive('appInfo', function() { // Creating a new directive appInfo
  return {
    restrict: 'E',  // Used as new HTML element
    scope: {
      info: '=',    // Look for an attribute named info in the appInfo element
    },
    // Specifies the HTML to use in order to display the data in scope.info
    templateUrl: 'appInfo.html'
  };
});

```

js/directives/appInfo.html
```html
<img class="icon" ng-src="{{ info.icon }}">
<h2 class="title">{{ info.title }}</h2>
<p class="developer">{{ info.developer }}</p>
<p class="price">{{ info.price | currency }}</p>
```

index.html
```html
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card" ng-repeat="app in apps">
      <app-info info="app"></app-info>
      <install-app></install-app>
    </div>
  </div>
</div>
```

==

## Formatting with filters
- syntax:  `{{ data | filter:options }}`
- date:
  +  `{{ '1388123412323' | date: 'MM/dd/yyyy @ h:mma' }}`
- uppercase & lowercase
  + `{{ 'octagon gem' | uppercase }}`
- limitTo:
  + `{{ 'My description' | limitTo:8 }}  <!--first 8 chars-->`
  + `<li ng-repeat="product in store.products" | limitTo:3 }}  <!--first 3 items-->`

```html
<p class="title">{{ product.name | uppercase }}</p>
<p class="price">{{ product.price | currency }} </p>
<p class="date">{{ product.pubdate | date }}</p>
```

==
