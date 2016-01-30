'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill("J'AI ETE APPELEE");
  reject(new Error("JE N'AI PAS ETE APPELEE"));
});

function onReject (error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
