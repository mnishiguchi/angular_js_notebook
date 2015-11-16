# Forms
- Turn off default HTML validation to be consistent using `novalidate`
- Mark the required field using `required`
- Prevent the submit if not $valid

## Resetting form's state to prevent from showing error after submission
```js
// Reset the form's state
$scope.reviewForm.$setPristine();
$scope.reviewForm.$setUntouched();
```
