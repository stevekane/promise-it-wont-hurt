// save starting time

function setup (mode, callback) {
  this.start = {
    submission: new Date(),
    solution: new Date()
  }
  this.duration = {
    submission: 0,
    solution: 0
  }

  process.nextTick(callback)
}

function starttime (exercise) {
  exercise.addSetup(setup)
  return exercise
}

module.exports = starttime
