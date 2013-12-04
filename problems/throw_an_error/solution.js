var q = require('q');

function parsePromised (json) {
  var def = q.defer()
    , result;
  
  try {
    result = JSON.parse(json); 
  } catch (e) {
    def.reject(e); 
  }

  def.resolve(result);
  return def.promise;
};

parsePromised(process.argv[2])
.then(null, console.log)
