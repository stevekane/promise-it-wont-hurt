// Create a promise

var promise = new Promise(function (fulfill, reject) {

  // After the timeout reaches 300ms, fulfill the promise with value
  // "RESOLVED!".

  setTimeout(function () {
    fulfill('RESOLVED!')
  }, 300)
})

// Add a handler to the promise's fulfillment. `console.log` will be called
// with the value passed to `fulfill`, which is `"RESOLVED!"`.
// Note that this statement will ALWAYS be executed before `fulfill` is
// called (we'll talk about this in depth in the lessons to come).

promise.then(console.log)
