var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var promise = new Promise(function (fulfill, reject) {
    fulfill("I FIRED");
    reject("I DID NOT FIRE");
});

promise.then(console.log, console.log);
