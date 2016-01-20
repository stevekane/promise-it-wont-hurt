'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');
var timer = require('workshopper-timer');

var THRESHOLD = 100;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// timer
exercise = timer(exercise, THRESHOLD);

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

  if (exercise.wrapData.usedFulfill) {
    this.emit('pass', __('pass.func', { func: 'fulfill' }));
  } else {
    ok = false;
    this.emit('fail', __('fail.func', { func: 'fulfill' }));
  }

  if (exercise.wrapData.usedPrototypeThen) {
    this.emit('pass', __('pass.func', { func: 'then' }));
  } else {
    ok = false;
    this.emit('fail', __('fail.func', { func: 'then' }));
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
