# Computer store
- Browses Amazon's computer store
- Inspired by 
[Making API Calls in AngularJS using Angular's $http service](http://www.sitepoint.com/api-calls-angularjs-http-service)

==

## XMLHttpRequest cannot load in angularjs
- To make a cross domain request using XMLHttpRequest, the web server responding to the request needs to have the Access-Control-Allow-Origin response header set to *.
- [AngularJS Error: Cross origin requests are only supported for protocol schemes: http, data, chrome-extension, https](http://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes)
- [Making Angular's $http work with Request.IsAjaxRequest() | Encosia](http://encosia.com/making-angulars-http-work-with-request-isajaxrequest/)
- [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
- http://enable-cors.org/
- http://samurails.com/tutorial/cors-with-angular-js-and-sinatra/

==

## Setting headers for $http
- http://www.angulartutorial.net/2014/05/set-headers-for-all-http-calls-in.html

==

## Converting XML into JSON
- https://code.google.com/p/x2js/
- [Convert XML to JSON In Angular JS](https://dzone.com/articles/convert-xml-to-json-in-angular-js)
- http://www.xml.com/pub/a/2006/05/31/converting-between-xml-and-json.html
- http://stackoverflow.com/questions/20369377/how-to-use-http-get-in-angularjs-correctly-in-specific-for-an-external-api-cal

==

## Amazon Item Search API

### Requirements
- Obtain AWS access key and secret key
- Create a Product Advertising API Account and [become an associate](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/becomingAssociate.html)

### Creating request URLs
- [Signed Requests Helper - Amazon Product Advertising API](http://associates-amazon.s3.amazonaws.com/signed-requests/helper/index.html)
- [Example REST Requests - AWSECommerceService](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/rest-signature.html)
- [Examples of How to Derive a Version 4 Signing Key](http://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html)

Unsigned URL
```
http://ecs.amazonaws.com/onca/xml?Service=AWSECommerceService
&Version=2011-08-01
&AssociateTag=PutYourAssociateTagHere
&Operation=ItemSearch
&SearchIndex=Books
&Keywords=ruby+rails
```

### Required pamameters
- AssociateTag, AWSAccessKeyId, Operation, Service
- [Common Request Parameters - Product Advertising API](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/CommonRequestParameters.html)

### ItemSearch Documentation
- [ItemSearch - AWSECommerceService](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemSearch.html)

### Some resources
- [Amazon Signature Version 4 Calculation](http://stackoverflow.com/questions/24459018/amazon-signature-version-4-calculation)
- [アマゾンのAPIを使って得た本の情報をGASのSpreadsheetに保存してみる - Qiita](http://qiita.com/yooo_gooo/items/4c94b5914fcf9e8b3910)
- [「Amazon API」の使い方を紹介 － リクエストURL作成の概要](http://www.panzee.biz/archives/6247)
- [Issue #326 · aws/aws-sdk-js](https://github.com/aws/aws-sdk-js/issues/326)
https://github.com/aws/aws-sdk-js/issues/326
amazon-api-gateway-cors/
- http://dev.classmethod.jp/cloud/aws/amazon-api-gateway-cors/
- http://stackoverflow.com/questions/32899439/aws-api-gateway-with-angular



==

## Formatting a date as YYYY-MM-DDTHH:mm:ssZ
- the ISO 8601 format
- '2013-02-14T13:15:03-08:00' (YYYY-MM-DDTHH:mm:ssZ).
- https://developers.google.com/schemas/formats/datetime-formatting?hl=en

```js
var d = new Date();
var date = d.toISOString();  //=> "2015-11-08T19:45:39.390Z"
```

==
