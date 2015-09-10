var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

function attachTitle (name) {
  return "DR. " + name;
}

var promise = new Promise(function (fulfill, reject) {
    fulfill("MANHATTAN");
});
promise.then(attachTitle)
.then(console.log);
