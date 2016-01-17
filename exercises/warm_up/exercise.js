'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
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

module.exports = exercise;
