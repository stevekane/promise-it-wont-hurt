var q = require('q')
  , qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function (buffer) {
  console.log(JSON.parse(buffer.toString()));
})
.then(null, console.error);
