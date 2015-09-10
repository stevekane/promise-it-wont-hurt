var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var http = require('http');

var promise = new Promise(function (fulfill, reject) {
    var options = {
        host: 'localhost',
        port: '1337'
    };

    callback = function(response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            fulfill(str);
        });
    };

    var req = http.request(options, callback);

    req.on('error', function (e) {
        reject(e);
    });

    req.end();
});


promise.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error);
