'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('@timothygu/workshopper-wrappedexec');
var timer = require('workshopper-timer');
var rnd = require('random-word');

var THRESHOLD = 100;

exercise = filecheck(exercise);
exercise = execute(exercise);

exercise = timer(exercise, THRESHOLD);
exercise = comparestdout(exercise);
exercise = wrappedexec(exercise, 'all');

exercise.wrapData.data = [rnd(), rnd()];
exercise.wrapData.rand = Math.round(Math.random()) * 2 - 1;

exercise.wrapModule(require.resolve('./wrap.js'));

exercise.addVerifyProcessor(function (callback) {
  var __ = this.__;
  var ok = true;

  if (exercise.wrapData.isInAll) {
    this.emit('pass', __('pass.inAll'));
  } else {
    ok = false;

    if (exercise.wrapData.usedPrototypeThen) {
      this.emit('fail', __('fail.inAll'));
    } else {
      this.emit('fail', __('fail.func', { func: 'then' }));
    }
  }
  process.nextTick(function () {
    callback(null, ok);
  });
});

module.exports = exercise;
