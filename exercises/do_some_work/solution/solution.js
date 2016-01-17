var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var http = require('http');

var promisifiedHttpRequest = function(options) {
	var hostname = options.hostname || 'localhost';
	var port = options.port || 80;
	var path = options.path || '/';

	return new Promise(function (fulfill, reject) {
	    var options = {
	        hostname: hostname,
	        port: port,
	        path: path
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
};

promisifiedHttpRequest({port: 7000})
.then(function (id) {
  return promisifiedHttpRequest({port: 7001, path: '/' + id});
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.catch(console.error);
