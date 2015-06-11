/**
 * Test.
 */

var assert = require('assert');
var fqdn = require('../index');

describe('Test fqdn', function () {
  it('should be ok', function (done) {
    fqdn(function (err, hostname) {
      if (err) {
        assert.ifError(err);
      } else {
        if (hostname.length) {
          assert.ok(hostname);
        }
        done();
      }
    });
  });
});
