# Scope

## Access parent scope from child controller
- [Access parent scope from child controller](http://stackoverflow.com/questions/21453697/angularjs-access-parent-scope-from-child-controller)

```html
<div ng-controller="ParentCtrl">
    <div ng-controller="ChildCtrl">
    </div>
</div>
```

```js
function ParentCtrl($scope) {
    $scope.cities = ["NY", "Amsterdam", "Barcelona"];
}

function ChildCtrl($scope) {
    $scope.parentcities = $scope.$parent.cities;
}
```
