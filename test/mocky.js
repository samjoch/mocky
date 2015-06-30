var db = require('../');
var collection;

describe('Mocky', function() {

  before(function() {
    collection = db.collection('foobars')
  });

  it('should mock a collection', function() {
    expect(collection._name).to.equal('foobars');
    expect(collection._docs).to.eql([]);
  });

  it('should mock insert', function(done) {
    collection.insert([{ _id: '1', foo: 'bar' }], function() {
      expect(collection._docs.length).to.eql(1);
      done();
    });
  });

  it('should mock findOne', function(done) {
    collection.findOne({ _id: '1' }, function(err, doc) {
      expect(doc.foo).to.eql('bar');
      done();
    });
  });

  it('should mock findAndModify', function(done) {
    collection.findAndModify({ _id: '1' }, {}, { $set: { foo: 'yo'} }, {},
      function(err, updated) {
        expect(updated.value.foo).to.eql('yo');
        expect(updated.value).to.eql(collection._docs[0]);
        done();
      }.bind(this));
  });

});

