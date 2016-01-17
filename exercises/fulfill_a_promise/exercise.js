'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');
var starttime = require('../../lib/starttime');
var endtime = require('../../lib/endtime');

var MINIMUM = 300;
var THRESHOLD = 100;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// start timer
exercise = starttime(exercise);

// end timer
exercise = endtime(exercise, THRESHOLD, MINIMUM);

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
    this.emit('pass', 'Used Promise varructor');
  } else {
    this.emit('fail', 'You didn\'t use the Promise varructor');
    ok = false;
  }
  if (exercise.wrapData.usedFulfill) {
    this.emit('pass', 'Used fulfill method');
  } else {
    this.emit('fail', 'You didn\'t use the fulfill method');
    ok = false;
  }
  if (exercise.wrapData.usedPrototypeThen) {
    this.emit('pass', 'Used then method');
  } else {
    this.emit('fail', 'You didn\'t use the then method');
    ok = false;
  }
  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
