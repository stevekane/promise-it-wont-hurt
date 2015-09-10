var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

function printError (err) {
  console.log(err.message); 
}

var promise = new Promise(function (fulfill, reject) {
	setTImeout(reject, 300, new Error("REJETE"));
};

promise.then(null, printError);

