var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
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
exercise.addProcessor(function (mode, callback) {
  var outputStream = through2.obj(function (chunk) {
    var result = chunk[0] === chunk[1]
    if (!result) {
      outputStream.push(chalk.yellow(repeat('\u2500', 80)) + '\n')
      outputStream.push('actual: ' + chalk.red(chunk[0]) + '\n')
      outputStream.push('expected: ' + chalk.red(chunk[1]) + '\n')
      outputStream.push(chalk.yellow(repeat('\u2500', 80)) + '\n\n')
    }
    callback(null, result)
  })
  tuple(this.submissionStdout.pipe(split()), this.solutionStdout.pipe(split()))
    .pipe(outputStream)
    .pipe(process.stdout)
})

exercise.addSetup(function (mode, callback) {
  this.submissionArgs = this.solutionArgs = ["{ohcrap: 'our data!'"]

  process.nextTick(callback)
})


module.exports = exercise
