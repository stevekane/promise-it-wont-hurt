function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function wrap (ctx) {
  ctx.usedPromise = false
  ctx.usedReject = false
  ctx.usedRejectWithError = false

  require('es6-promise')
  var p = Promise

  Promise = function (func) {
    var stack = ctx.$captureStack(Promise)
    var inUserCode = stack[0].getFileName().substring(0, ctx.mainProgram.length) === ctx.mainProgram

    ctx.usedPromise = ctx.usedPromise || inUserCode
    return p.call(this, function (fulfill, reject) {
      func(fulfill, function (err) {
        ctx.usedReject = ctx.usedReject || inUserCode
        ctx.usedRejectWithError = ctx.usedRejectWithError || inUserCode && err instanceof Error
        reject(err)
      })
    })
  }

  var savedPrototype = {
    then: p.prototype.then
  }
  Promise.prototype = p.prototype
  ctx.usedPrototypeThen = false
  ctx.usedPrototypeThenFirstCb = false
  ctx.usedPrototypeThenSecondCb = false

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var stack = ctx.$captureStack(Promise.prototype.then)
    var inUserCode = stack[0].getFileName().substring(0, ctx.mainProgram.length) === ctx.mainProgram

    ctx.usedPrototypeThen = ctx.usedPrototypeThen || inUserCode
    ctx.usedPrototypeThenFirstCb = ctx.usedPrototypeThenFirstCb || inUserCode && typeof onFulfilled === 'function'
    ctx.usedPrototypeThenSecondCb = ctx.usedPrototypeThenSecondCb || inUserCode && typeof onRejected === 'function'

    return savedPrototype.then.apply(this, arguments)
  }

}

wrap.wrapSubmission = true
wrap.wrapSolution = true

module.exports = wrap
