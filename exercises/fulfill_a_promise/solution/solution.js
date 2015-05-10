// Promise shimming. This detects if native Promise is available, and if not
// fall back onto `es6-promise`.
var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

// Creates a promise
var promise = new Promise(function (fulfill, reject) {
  // After the timeout reaches 300ms, fulfill the promise with value
  // "RESOLVED!".
  setTimeout(fulfill, 300, 'RESOLVED!')

  // The following is equivalent to above:
  //
  // ```
  // setTimeout(function () {
  //   fulfill('RESOLVED!')
  // }, 300)
  // ```
})

// Add a handler to the promise's fulfillment. `console.log` will be called
// with the value passed to `fulfill`, which is `RESOLVED!`.
// Note that this statement will ALWAYS be executed before `fulfill` is
// called (we'll talk about this in detail in the challenges to come).
promise.then(console.log)
