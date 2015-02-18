var http          = require('http')
  , uuid          = require('node-uuid')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  var id = uuid.v1();
  var user = {
    id: id,
    first_name: "Barry",
    last_name: "Gernhardt",
    occupation: "Twitter rant specialist",
  };

  function cacheServer(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(id);
  }

  function dbServer(req, res) {
    if (req.url.indexOf(id) > -1) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
    }
    res.end();
  }

  this.servers = {
    cache:    http.createServer(cacheServer),
    database: http.createServer(dbServer)
  };

  var self = this;
  this.servers.cache.listen(7000, function(err) {
    if (err) {
      return callback(err);
    }
    self.servers.database.listen(7001, callback);
  });
});


// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  var server;
  for (var kind in this.servers) {
    server = this.servers[kind];
    server && server.close();
  }
});

module.exports = exercise
