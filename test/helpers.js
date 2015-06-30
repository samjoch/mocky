var _ = require('underscore');
_.sift = require('sift');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

_.extend(GLOBAL, { _: _, expect: expect, sinon: sinon });

