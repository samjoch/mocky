var _ = require('underscore');
var sift = require('sift');

var Collection = function(name) {
  this._name = name;
  this._docs = [];
}

Collection.prototype.insert = function(datas, cb) {
  var inserted = [];
  datas.forEach(function(data) {
    this._docs.push(data);
    inserted.push(data);
  }.bind(this));
  return cb(null, { n:1, ops: inserted });
};

Collection.prototype.findOne = function(query, cb) {
  cb(null, sift(query, this._docs)[0]);
};

Collection.prototype.findAndModify = function(query, sort, update, opts, cb) {
  var _docs = _.sortBy(this._docs, _.keys(sort)[0]);
  var data = sift(query, _docs)[0] || {};
  _.each(update.$set, function(v, k) { data[k] = v; });
  cb(null, { value: data });
};

var Mocky = function() {
  this._cols = {};
};

Mocky.prototype.collection = function(name) {
  this._cols[name] || (this._cols[name] = new Collection(name));
  return this._cols[name];
}

module.exports = new Mocky();

