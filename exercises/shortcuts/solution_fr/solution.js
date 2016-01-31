/*
 * Ne prenez pas cette solution au sérieux.  C’est censé être une blague.
 */

'use strict';

var message;
var promise;

function randomBytes (n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'Une exception fatale ' + randomBytes(1) + ' est survenue à ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Votre système va\n' +
  'redémarrer dans 3 secondes.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom () {
    // non, ce n’est pas un bogue
    process.stderr.write('\rredémarrer dans ' + (++i) + ' secondes.');
    setTimeout(boom, 1000);
  }, 1000);
});
