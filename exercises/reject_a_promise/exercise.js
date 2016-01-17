var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , starttime     = require('../../lib/starttime.js')
  , endtime       = require('../../lib/endtime.js')

var MINIMUM       = 300
var THRESHOLD     = 100

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// start timer
exercise = starttime(exercise)

// end timer
exercise = endtime(exercise, THRESHOLD, MINIMUM)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


module.exports = exercise
