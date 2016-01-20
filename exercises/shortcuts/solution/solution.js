/*
 * Please do not take this solution seriously. It’s supposed to be a joke.
 */

'use strict';

var message;
var promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    // no, it’s not a bug
    process.stderr.write('\rwill be terminated in ' + (++i) + ' seconds.');
    setTimeout(boom, 1000);
  }, 1000);
});
