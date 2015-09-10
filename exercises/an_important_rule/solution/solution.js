var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

function iterate (num) {
  console.log(num);
  return ++num;
};

function alwaysThrows () {
  throw new Error("OH NOES");
};

var promise = new Promise(function (fulfill, reject) {
	fulfill(iterate(1));
});

promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
