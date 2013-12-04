var q = require('q')
  , def1 = q.defer()
  , def2 = q.defer();

q.all([def1.promise, def2.promise])
.then(console.log);

setTimeout(function () {
  def1.resolve("PROMISES");
  def2.resolve("FTW");
}, 200);
