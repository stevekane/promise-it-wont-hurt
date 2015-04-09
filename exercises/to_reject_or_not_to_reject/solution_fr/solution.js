var q = require('q')
  , def = q.defer();

def.promise.then(console.log, console.log);
def.resolve("J'AI ETE APPELEE");
def.reject("MOI PAS");
