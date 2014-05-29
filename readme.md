# jortSort 

## [jort.technology](http://jort.technology)

sorting is over as we know it. more info soon.

```js
var jortSort = function( array ) {

  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```

## literally made with blood and tears

* created by [@jennschiffer](http://twitter.com/jennschiffer)
* email: jenn @ dotbiz.info (yes, this is a real email)
* logo by [@isaacdurazo](http://twitter.com/isaacdurazo)
