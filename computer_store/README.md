# Computer store
- Browses Amazon's computer store
- Inspired by 
[Making API Calls in AngularJS using Angular's $http service](http://www.sitepoint.com/api-calls-angularjs-http-service)

## Angular resources

- [AngularJSはWebサイトのテンプレートエンジンとしてだけ見てもなかなか使える](http://deerest.co/2015/05/12/angular-template/)
- [AngularJSでHTMLを分割するのにお手軽なng-include](http://angularjsninja.com/blog/2013/11/19/angularjs-nginclude/)

## Converting XML into JSON
- https://code.google.com/p/x2js/
- [Convert XML to JSON In Angular JS](https://dzone.com/articles/convert-xml-to-json-in-angular-js)
- http://www.xml.com/pub/a/2006/05/31/converting-between-xml-and-json.html

## Amazon item search API
- http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemSearch.html
- http://docs.aws.amazon.com/AWSECommerceService/latest/DG/rest-signature.html
- [Examples of How to Derive a Version 4 Signing Key](http://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html)
- [Amazon Signature Version 4 Calculation](http://stackoverflow.com/questions/24459018/amazon-signature-version-4-calculation)

```
http://webservices.amazon.com/onca/xml?
Service=AWSECommerceService
&AWSAccessKeyId=AKIAIEKR4D2NCZL7PX7Q 
&Operation=ItemSearch
&Keywords=Rocket
&SearchIndex=Toys
&Timestamp=2014-08-18T12:00:00Z
```


## Formatting a date as YYYY-MM-DDTHH:mm:ssZ
- https://developers.google.com/schemas/formats/datetime-formatting?hl=en
```js
var d = new Date();
var date = d.toISOString();  //=> "2015-11-08T19:45:39.390Z"
```

