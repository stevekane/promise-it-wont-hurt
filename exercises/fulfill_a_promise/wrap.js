function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function wrap (ctx) {
  ctx.usedPromise = false
  ctx.usedFulfill = false

  require('es6-promise')
  var p = Promise

  Promise = function (func) {
    var stack = ctx.$captureStack(Promise)
    var inUserCode = stack[0].getFileName().substring(0, ctx.mainProgram.length) === ctx.mainProgram

    ctx.usedPromise = ctx.usedPromise || inUserCode
    return p.call(this, function (fulfill, reject) {
      func(function (val) {
        ctx.usedFulfill = ctx.usedFulfill || inUserCode
        fulfill(val)
      }, reject)
    })
  }

  var savedPrototype = {
    then: p.prototype.then
  }
  Promise.prototype = p.prototype
  ctx.usedPrototypeThen = false

  Promise.prototype.then = function () {
    var stack = ctx.$captureStack(Promise.prototype.then)
    var inUserCode = stack[0].getFileName().substring(0, ctx.mainProgram.length) === ctx.mainProgram

    ctx.usedPrototypeThen = ctx.usedPrototypeThen || inUserCode

    return savedPrototype.then.apply(this, arguments)
  }

}

wrap.wrapSubmission = true
wrap.wrapSolution = true

module.exports = wrap
