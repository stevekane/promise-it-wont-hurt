/*
 * Please do not take this solution seriously. It’s supposed to be a joke.
 */

'use strict';

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

var message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

var promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  process.stderr.write(err.message);

  var i = 3;

  setTimeout(function boom() {
    // no, it’s not a bug
    process.stderr.write('\rwill be terminated in ' + (++i) + ' seconds.')
    setTimeout(boom, 1000);
  }, 1000);
});
