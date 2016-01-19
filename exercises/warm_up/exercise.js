'use strict';

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
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

module.exports = exercise;
