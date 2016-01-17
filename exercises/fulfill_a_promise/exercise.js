var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , wrappedexec   = require('@timothygu/workshopper-wrappedexec')
  , starttime     = require('../../lib/starttime')
  , endtime       = require('../../lib/endtime')

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

// make available .wrapModule
exercise = wrappedexec(exercise, 'all')

// make sure Promise is available
exercise.wrapModule(require.resolve('./wrap.js'))

exercise.addVerifyProcessor(function (callback) {
  var ok = true
  if (exercise.wrapData.usedPromise) {
    this.emit('pass', 'Used Promise constructor')
  } else {
    this.emit('fail', 'You didn\'t use the Promise constructor')
    ok = false
  }
  if (exercise.wrapData.usedFulfill) {
    this.emit('pass', 'Used fulfill method')
  } else {
    this.emit('fail', 'You didn\'t use the fulfill method')
    ok = false
  }
  if (exercise.wrapData.usedPrototypeThen) {
    this.emit('pass', 'Used then method')
  } else {
    this.emit('fail', 'You didn\'t use the then method')
    ok = false
  }
  process.nextTick(function () {
    callback(null, ok)
  })
})

module.exports = exercise
