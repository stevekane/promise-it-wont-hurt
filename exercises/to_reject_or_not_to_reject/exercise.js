var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');
var starttime = require('../../lib/starttime');
var endtime = require('../../lib/endtime');

var THRESHOLD = 100;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// start timer
exercise = starttime(exercise);

// end timer
exercise = endtime(exercise, THRESHOLD);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// make sure Promise is available
// and wrap Promise with hooks used to check if the user used Promises as
// instructed
exercise = wrappedexec(exercise, 'all');
exercise.wrapModule(require.resolve('./wrap.js'));

// check if hooks have been activated
exercise.addVerifyProcessor(function (callback) {
  var ok = true;

  if (exercise.wrapData.usedPromise) {
    this.emit('pass', 'Used Promise constructor');
  } else {
    this.emit('fail', 'You didn\'t use the Promise constructor');
    ok = false;
  }

  if (exercise.wrapData.usedRejectWithError) {
    this.emit('pass', 'Used reject method with Error object');
  } else {
    ok = false;

    if (exercise.wrapData.usedRejectBeforeFulfill ||
        exercise.wrapData.usedRejectAfterFulfill) {
      this.emit('fail', 'You used reject method with a non-Error object');
    }
  }

  if (exercise.wrapData.usedRejectBeforeFulfill) {
    ok = false;
    this.emit('fail', 'You used reject function before calling fulfill function')
  } else if (exercise.wrapData.usedRejectAfterFulfill) {
    this.emit('pass', 'Used reject function after calling fulfill function');
  } else {
    ok = false;
    this.emit('fail', 'You didn\'t use the reject method');
  }

  if (exercise.wrapData.usedPrototypeThenBothCb) {
    this.emit('pass', 'Used then method with both callbacks specified');
  } else {
    ok = false;
    this.emit('pass', 'You didn\'t use then method with both callbacks specified');
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
