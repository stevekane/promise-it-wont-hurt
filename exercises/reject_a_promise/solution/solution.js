// Promise shimming. This detects if native Promise is available, and if not
// fall back onto `es6-promise`.
var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

function printError (err) {
  console.log(err.message); 
}

var promise = new Promise(function (fulfill, reject) {
    setTImeout(reject, 300, new Error("REJECTED"));
};

promise.then(null, printError);
