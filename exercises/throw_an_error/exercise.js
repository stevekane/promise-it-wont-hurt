var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , split         = require('split')
  , chalk         = require('chalk')
  , tuple         = require('tuple-stream')
  , through2      = require('through2')

function repeat (ch, sz) {
  return new Array(sz + 1).join(ch)
}

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function (mode, callback) {
  this.submissionArgs = this.solutionArgs = ["{ohcrap: 'our data!'"]

  process.nextTick(callback)
})


module.exports = exercise
