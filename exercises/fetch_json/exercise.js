var http = require('http');
var user = {
  id: 1337,
  name: "Katy Perry",
  occupation: "???",
};

module.exports = function (run) {
  var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(user));
  });
  
  server.listen(1337);

  return {
    close: server.close.bind(server),
    long: true
  };
};
