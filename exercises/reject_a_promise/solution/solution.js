// Promise shimming. This detects if native Promise is available, and if not
// fall back onto `es6-promise`.

global.Promise = typeof Promise === 'undefined'
               ? require('es6-promise').Promise
               : Promise

// Create a promise

var promise = new Promise(function (fulfill, reject) {

  // After the timeout reaches 300ms, reject the promise with an `Error` object
  // with parameter `"REJECTED!"`.

  setTimeout(function () {
    reject(new Error('REJECTED!'))
  }, 300)
})

// Create a function to print `error.message` using `console.log`.

function printError (error) {
  console.log(error.message)
}

// Pass this function as a rejection handler to the `then` method of the
// promise (the second parameter).

promise.then(null, printError)
