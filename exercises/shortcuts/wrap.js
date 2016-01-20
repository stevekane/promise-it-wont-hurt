'use strict';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var p;
  var savedPrototype;

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  require('es6-promise');
  p = Promise;

  savedPrototype = {};

  ctx.usedPrototypeCatch = false;
  savedPrototype.catch = p.prototype.catch;

  Promise.prototype.catch = function (onRejected) {
    var stack = ctx.$captureStack(Promise.prototype.catch);
    var inUserCode = isInUserCode(stack);

    ctx.usedPrototypeCatch = ctx.usedPrototypeCatch || inUserCode;

    return savedPrototype.catch.apply(this, arguments);
  };

  ['reject', 'resolve'].forEach(function (f) {
    var capF = capitalize(f);

    if (typeof p[f] === 'function') {
      ctx['usedPromise' + capF] = false;

      Promise[f] = function () {
        var stack = ctx.$captureStack(Promise[f]);
        var inUserCode = isInUserCode(stack);

        ctx['usedPromise' + capF] = ctx['usedPromise' + capF] || inUserCode;

        return p[f].apply(this, arguments);
      };
    }
  });

  /* eslint-enable no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
