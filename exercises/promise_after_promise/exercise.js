'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');
var timer = require('workshopper-timer');
var rnd = require('random-word');

var THRESHOLD = 100;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

exercise = timer(exercise, THRESHOLD);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// make sure Promise is available
// and wrap Promise with hooks used to check if the user used Promises as
// instructed
exercise = wrappedexec(exercise, 'all');

exercise.wrapData.firstSentinel = rnd();

exercise.wrapModule(require.resolve('./wrap.js'));

// check if hooks have been activated
exercise.addVerifyProcessor(function (callback) {
  var __ = this.__;
  var ok = true;

  if (this.wrapData.returnedPromise) {
    this.emit('pass', __('pass.returnedPromise'));
  } else {
    ok = false;

    if (this.wrapData.usedFirst) {
      this.emit('fail', __('fail.returnedPromise', { returned: exercise.wrapData.returned }));
    } else {
      this.emit('fail', __('fail.func', { func: 'first' }));
    }
  }

  if (this.wrapData.usedSecond) {
    this.emit('pass', __('pass.func', { func: 'second' }));
  } else {
    ok = false;
    this.emit('fail', __('fail.func', { func: 'second' }));
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
