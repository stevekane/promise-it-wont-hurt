'use strict';

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var p;
  var savedPrototype;

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  ctx.usedFirst = false;
  ctx.usedSecond = false;
  ctx.returnedPromise = false;
  ctx.returned = 'undefined';

  require('es6-promise');
  p = Promise;

  global.first = function () {
    var stack = ctx.$captureStack(global.first);
    var inUserCode = isInUserCode(stack);

    if (inUserCode) ctx.usedFirst = true;

    var out = new Promise(function (fulfill, reject) {
      setTimeout(function () {
        fulfill(ctx.firstSentinel);
      }, 200);
    });
    var origThen = out.then;
    out.then = function (onFulfilled, onRejected) {
      var stack = ctx.$captureStack(out.then);
      var inUserCode = isInUserCode(stack);

      return origThen.call(this, onFulfilled ? function (val) {
        var returned = onFulfilled(val);
        ctx.returned = returned + '';
        if (inUserCode && returned instanceof Promise) {
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
