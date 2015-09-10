var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var promise = new Promise(function (fulfill, reject) {
    fulfill("SECOND");
    console.log("FIRST");
});

promise.then(console.log);
