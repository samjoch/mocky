Mocky
=====

Mocky is a simple way to use mongodb in test without mongodb.

### Usage:

```javascript
var db = require('mocky-db');
var collection = db.collection('foobars');

collection.insert([{ _id: '1', foo: 'bar' }], function() {});
collection.findOne({ _id: '1' }, function(err, doc) {
  // doc is { _id: '1', foo: 'bar' }
});
```

