'use strict';

var through2 = require('through2');
var bl = require('bl');

function setup(mode, callback) {
  this.start = {
    submission: new Date(),
    solution: new Date(),
  };
  this.duration = {
    submission: 0,
    solution: 0,
  };

  process.nextTick(callback);
}

function verifyProcessor(threshold, callback) {
  function verify(cur, alt) {
    var real = this[cur + 'Stdout'];
    var dummy = this[cur + 'Stdout'] = through2();

    real.pipe(bl(function (err, data) {
      if (err) dummy.emit('error', err);

      this.duration[cur] = new Date() - this.start[cur];

      if (this.duration[alt]) {
        if (Math.abs(this.duration[cur] - this.duration[alt]) > threshold) {
          return this.emit('fail',
            'Expected execution time: ' + this.duration.solution + '±' + threshold + 'ms. ' +
            'Submission execution time: ' + this.duration.submission + 'ms.'
          );
        }

        this.emit('pass', 'Execution time within ±' + threshold + 'ms of expected');
      }

      dummy.write(data.toString());
      dummy.end();
    }.bind(this)));
  }

  verify.call(this, 'submission', 'solution');
  verify.call(this, 'solution', 'submission');

  process.nextTick(function () {
    callback(null, true);
  });
}

function timer(exercise, threshold) {
  exercise.addSetup(setup);
  exercise.addVerifyProcessor(verifyProcessor.bind(exercise, threshold));

  return exercise;
}

module.exports = timer;
