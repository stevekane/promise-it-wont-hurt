var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(console.log)
.then(JSON.parse)
.then(null, console.error)
.done();
