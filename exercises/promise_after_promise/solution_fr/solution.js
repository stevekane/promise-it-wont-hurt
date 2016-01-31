'use strict';

/* global first, second */

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// Une autre possibilité aurait été :
// first().then(second).then(console.log);
