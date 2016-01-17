'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});

// At this point, the value of promise is already known.

// If promise is not always asynchronous, console.log would be called with
// 'PROMISE VALUE' here. This is not the case.

promise.then(console.log);

console.log('MAIN PROGRAM');
