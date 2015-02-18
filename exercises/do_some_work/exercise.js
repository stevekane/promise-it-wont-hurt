var http = require('http')
  , uuid = require('node-uuid')
  , id = uuid.v1();

var user = {
  id: id,
  first_name: "Barry",
  last_name: "Gernhardt",
  occupation: "Twitter rant specialist",
};

module.exports = function (run) {
  var cache = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(id);
  });
  var database = http.createServer(function (req, res) {
    if (req.url.indexOf(id) > -1) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
    }
    res.end();
  });
  
  cache.listen(7000);
  database.listen(7001);

  return {
    close: function () {
      cache.close();
      database.close();
    },
    long: true
  };
};
