var q = require('q');
var def = q.defer();

function printError (err) {
  console.log(err.message); 
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));
