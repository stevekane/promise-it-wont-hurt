var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(JSON.parse)
.then(console.log)
.then(null, console.error)
.done();
