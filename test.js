'use strict';

require('mocha');
var assert = require('assert');
var strip = require('./');

describe('strip-bom-string', function () {
  it('should strip bom:', function () {
    assert.equal(strip('\ufefffoo'), 'foo');
  });

  it('should return a non-string value', function () {
    assert.deepEqual(strip({}), {});
  });
});

