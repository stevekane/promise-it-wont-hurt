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

  if (this.wrapData.thenAttachTitle) {
    this.emit('pass', __('pass.createdAndUsedFunc', { func: 'attachTitle' }));

    if (this.wrapData.thenAttachTitleSync) {
      this.emit('pass', __('pass.returnedSync'));
    } else {
      ok = false;
      this.emit('fail', __('fail.returnedSync'));
    }
  } else {
    ok = false;
    this.emit('fail', __('fail.createdAndUsedFunc', { func: 'attachTitle' }));
  }

  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
