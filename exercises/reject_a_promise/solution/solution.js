var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var printError = function (err) {
  console.log(err.message); 
};

var promise = new Promise(function (fulfill, reject) {
    setTimeout(reject, 300, new Error("REJECTED"));
});

promise.then(null, printError);
