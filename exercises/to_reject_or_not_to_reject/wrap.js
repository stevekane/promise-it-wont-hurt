'use strict';

function wrap(ctx) {
  /* eslint-disable new-cap, no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var p;
  var savedPrototype;

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  ctx.usedPromise = false;
  ctx.usedFulfill = false;
  ctx.usedRejectBeforeFulfill = false;
  ctx.usedRejectAfterFulfill = false;
  ctx.usedRejectWithError = false;

  require('es6-promise');
  p = Promise;

  Promise = function Promise(func) {
    var stack = ctx.$captureStack(Promise);
    var inUserCode = isInUserCode(stack);
    var transformedFunc = function (fulfill, reject) {
      func(function (value) {
        ctx.usedFulfill = ctx.usedFulfill || inUserCode;
        fulfill(value);
      }, function (err) {
        ctx.usedRejectBeforeFulfill = ctx.usedRejectBeforeFulfill ||
          !ctx.usedFulfill && inUserCode;
        ctx.usedRejectAfterFulfill = ctx.usedRejectAfterFulfill ||
          ctx.usedFulfill && inUserCode;
        ctx.usedRejectWithError = ctx.usedRejectWithError || inUserCode && err instanceof Error;
        reject(err);
      });
    };

    ctx.usedPromise = ctx.usedPromise || inUserCode;

    if (this instanceof Promise) {
      return new p(transformedFunc);
    }

    return p(transformedFunc);
  };

  savedPrototype = {
    then: p.prototype.then,
  };

  Promise.prototype = p.prototype;
  ctx.usedPrototypeThen = false;
  ctx.usedPrototypeThenFirstCb = false;
  ctx.usedPrototypeThenSecondCb = false;

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var stack = ctx.$captureStack(Promise.prototype.then);
    var inUserCode = isInUserCode(stack);

    ctx.usedPrototypeThen = ctx.usedPrototypeThen || inUserCode;
    ctx.usedPrototypeThenBothCb = ctx.usedPrototypeThenFirstCb ||
      inUserCode && typeof onFulfilled === 'function' && typeof onRejected === 'function';

    return savedPrototype.then.apply(this, arguments);
  };
  /* eslint-enable new-cap, no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
