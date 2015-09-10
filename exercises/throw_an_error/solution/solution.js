var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

function parsePromised (json) {
  var result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve(result);
};

parsePromised(process.argv[2])
.then(null, console.log)
