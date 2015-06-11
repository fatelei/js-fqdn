/**
 * Get fqdn.
 */

var dns = require('dns');
var os = require('os');

module.exports = function (callback) {
  var hostname = os.hostname();
  dns.lookup(hostname, function (err, address) {
    if (err) {
      return callback(err, null);
    }

    dns.reverse(address, function (err, hostnames) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, hostnames[0]);
    });
  });
};
