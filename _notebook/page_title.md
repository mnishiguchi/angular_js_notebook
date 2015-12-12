# Dynamically changing page titles
- http://stackoverflow.com/questions/12506329/how-to-dynamically-change-header-based-on-angularjs-partial-view

```js
// Set the tab position
vm.setTab = function(tab) {
  vm.tab = tab;

  // Set the page title via $window.
  $window.document.title = vm.tabNames[ tab ];
};
```

```html
<head>
  <title>Masatoshi Nishiguchi</title>
  ...
</head>
```
