var q = require('q');

function iterate (num) {
  console.log(num);
  return ++num;
};

function throwMyGod () {
  throw new Error("OH NOES");
};

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
