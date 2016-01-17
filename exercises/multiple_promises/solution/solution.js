var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

var promise1 = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill("PROMISES");
  }, 200);
});

var promise2 = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill("FTW");
  }, 200);
});

var all = function (prom1, prom2) {
  var group = new Promise(function (fulfill, reject) {
    var counter = 0
    , val1
    , val2;

    prom1
    .then(function (result) {
      val1 = result;
      ++counter;
      if (counter >=2) fulfill([val1, val2]);
    })
    .then(null, reject);

    prom2
    .then(function (result) {
      val2 = result;
      ++counter;
      if (counter >=2) fulfill([val1, val2]);
    })
    .then(null, reject);
  });

  return group;
};

all(promise1, promise2)
.then(console.log)
.catch(console.error);
