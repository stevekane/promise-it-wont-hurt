'use strict';

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  ctx.usedFirst = false;
  ctx.usedSecond = false;
  ctx.returnedPromise = false;
  ctx.returned = 'undefined';

  require('es6-promise');

  global.first = function () {
    var stack = ctx.$captureStack(global.first);
    var inUserCode = isInUserCode(stack);
    var out;
    var origThen;

    if (inUserCode) ctx.usedFirst = true;

    out = new Promise(function (fulfill, reject) {
      setTimeout(function () {
        fulfill(ctx.firstSentinel);
      }, 200);
    });
    origThen = out.then;
    out.then = function (onFulfilled, onRejected) {
      var innerStack = ctx.$captureStack(out.then);
      var innerInUserCode = isInUserCode(innerStack);

      return origThen.call(this, onFulfilled ? function (val) {
        var returned = onFulfilled(val);
        ctx.returned = returned + '';
        if (innerInUserCode && returned instanceof Promise) {
          ctx.returnedPromise = true;
        }
        return returned;
      } : onFulfilled, onRejected);
    };
    return out;
  };

  global.second = function (input) {
    ctx.usedSecond = true;

    return new Promise(function (fulfill, reject) {
      setTimeout(function () {
        fulfill(require('shasum')(input));
      }, 200);
    });
  };

  /* eslint-enable no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
