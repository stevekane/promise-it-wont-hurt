'use strict';

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var p;

  function isInUserCode(stack) {
    var filename = stack[0].getFileName();
    return filename && filename.substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  ctx.usedPrototypeThen = false;
  ctx.isInAll = false;

  require('es6-promise');
  p = Promise;

  Promise.all = undefined;

  global.getPromise1 = function () {
    var timeout;
    var used = false;

    var out = new Promise(function (fulfill) {
      timeout = setTimeout(fulfill, 400 + ctx.rand * 200, ctx.data[0]);
    });

    out.then = function (onFulfilled, onRejected) {
      var stack = ctx.$captureStack(out.then);
      var i;

      used = true;

      if (isInUserCode(stack)) ctx.usedPrototypeThen = true;

      for (i = 0; i < stack.length; i++) {
        if (isInUserCode([stack[i]]) &&
            stack[i].getFunctionName() === 'all') {
          ctx.isInAll = true;
        }
      }

      return p.prototype.then.apply(this, arguments);
    };

    // Evil. Yes, I know.
    process.nextTick(function () {
      if (!used) timeout.unref();
    });

    return out;
  };

  global.getPromise2 = function () {
    var timeout;
    var used = false;

    var out = new Promise(function (fulfill) {
      timeout = setTimeout(fulfill, 400 - ctx.rand * 200, ctx.data[1]);
    });

    out.then = function (onFulfilled, onRejected) {
      used = true;
      return p.prototype.then.apply(this, arguments);
    };

    process.nextTick(function () {
      if (!used) timeout.unref();
    });

    return out;
  };

  /* eslint-enable no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
