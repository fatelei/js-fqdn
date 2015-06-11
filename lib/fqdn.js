/**
 * Get fqdn.
 */

var exec = require('child_process').exec;

module.exports = function (callback) {
  exec('hostname -f', function (err, stdout, stderr) {
    if (err) {
      return callback(err);
    }

    if (stdout) {
      return callback(null, stdout.toString());
    }

    return callback(stderr.toString());
  });
};
