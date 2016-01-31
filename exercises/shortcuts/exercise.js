'use strict';

var path = require('path');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout);
  return this.on('executeEnd', function () {
    callback(null, true);
  });
});

// make sure Promise is available
// and wrap Promise with hooks used to check if the user used Promises as
// instructed
exercise = wrappedexec(exercise, 'all');
exercise.wrapModule(require.resolve('./wrap.js'));

// check if hooks have been activated
exercise.addVerifyProcessor(function (callback) {
  var __ = this.__;
  var ok = true;

  if (exercise.wrapData.usedPromiseResolve) {
    this.emit('pass', __('pass.func', { func: 'Promise.resolve' }));
  } else if (exercise.wrapData.usedPromiseReject) {
    this.emit('pass', __('pass.func', { func: 'Promise.reject' }));
  } else {
    ok = false;

    this.emit('fail', __('fail.funcOr', {
      func1: 'Promise.resolve',
      func2: 'Promise.reject',
    }));
  }

  if (exercise.wrapData.usedPrototypeCatch) {
    this.emit('pass', __('pass.func', { func: 'catch' }));
  } else {
    ok = false;
    this.emit('fail', __('fail.func', { func: 'catch' }));
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
