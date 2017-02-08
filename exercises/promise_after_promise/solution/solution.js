'use strict';

/* global first, second */

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);
