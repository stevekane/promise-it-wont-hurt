var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var promise = new Promise(function (fulfill, reject) {
    fulfill("J'AI ETE APPELEE");
    reject("MOI PAS");
});

promise.then(console.log, console.log);
