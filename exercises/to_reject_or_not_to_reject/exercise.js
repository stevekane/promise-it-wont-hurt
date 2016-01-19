'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// make sure Promise is available
// and wrap Promise with hooks used to check if the user used Promises as
// instructed
exercise = wrappedexec(exercise, 'all');
exercise.wrapModule(require.resolve('./wrap.js'));

// check if hooks have been activated
exercise.addVerifyProcessor(function (callback) {
  var __ = this.__;
  var ok = true;

  if (exercise.wrapData.usedPromise) {
    this.emit('pass', __('pass.constr'));
  } else {
    this.emit('fail', __('fail.constr'));
    ok = false;
  }

  if (exercise.wrapData.usedRejectWithError) {
    this.emit('pass', __('pass.funcObj', { func: 'reject', type: 'Error' }));
  } else {
    ok = false;

    if (exercise.wrapData.usedRejectBeforeFulfill ||
        exercise.wrapData.usedRejectAfterFulfill) {
      this.emit('fail', __('fail.funcObj', { func: 'reject', type: 'Error' }));
    }
  }

  if (exercise.wrapData.usedRejectBeforeFulfill) {
    ok = false;
    this.emit('fail', __('fail.funcAfter', { before: 'fulfill', after: 'reject' }));
  } else if (exercise.wrapData.usedRejectAfterFulfill) {
    this.emit('pass', __('pass.funcAfter', { before: 'fulfill', after: 'reject' }));
  } else {
    ok = false;
    this.emit('fail', __('fail.func', { func: 'reject' }));
  }

  if (exercise.wrapData.usedPrototypeThenBothCb) {
    this.emit('pass', __('pass.thenBoth'));
  } else {
    ok = false;
    this.emit('fail', __('fail.thenBoth'));
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
