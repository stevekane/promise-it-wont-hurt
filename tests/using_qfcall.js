var q = require('q');

q.fcall(JSON.parse, process.argv[2])
.then(null, console.log)
