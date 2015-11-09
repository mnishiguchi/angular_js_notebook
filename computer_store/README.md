# Computer store
- Browses Amazon's computer store
- Inspired by 
[Making API Calls in AngularJS using Angular's $http service](http://www.sitepoint.com/api-calls-angularjs-http-service)

==

## Angular resources
- [AngularJSはWebサイトのテンプレートエンジンとしてだけ見てもなかなか使える](http://deerest.co/2015/05/12/angular-template/)
- [AngularJSでHTMLを分割するのにお手軽なng-include](http://angularjsninja.com/blog/2013/11/19/angularjs-nginclude/)

==

## Converting XML into JSON
- https://code.google.com/p/x2js/
- [Convert XML to JSON In Angular JS](https://dzone.com/articles/convert-xml-to-json-in-angular-js)
- http://www.xml.com/pub/a/2006/05/31/converting-between-xml-and-json.html

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

==

## Formatting a date as YYYY-MM-DDTHH:mm:ssZ
- the ISO 8601 format
- '2013-02-14T13:15:03-08:00' (YYYY-MM-DDTHH:mm:ssZ).
- https://developers.google.com/schemas/formats/datetime-formatting?hl=en

```js
var d = new Date();
var date = d.toISOString();  //=> "2015-11-08T19:45:39.390Z"
```

