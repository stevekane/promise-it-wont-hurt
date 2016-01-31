'use strict';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var savedPrototype;
  var savedClassMethods;

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  require('es6-promise');

  savedPrototype = {};

  ctx.usedPrototypeCatch = false;
  savedPrototype.catch = Promise.prototype.catch;

  Promise.prototype.catch = function (onRejected) {
    var stack = ctx.$captureStack(Promise.prototype.catch);
    var inUserCode = isInUserCode(stack);

    ctx.usedPrototypeCatch = ctx.usedPrototypeCatch || inUserCode;

    return savedPrototype.catch.apply(this, arguments);
  };

  savedClassMethods = {};

  ['reject', 'resolve'].forEach(function (f) {
    var capF = capitalize(f);

    if (typeof Promise[f] === 'function') {
      savedClassMethods[f] = Promise[f];
      ctx['usedPromise' + capF] = false;

      Promise[f] = function () {
        var stack = ctx.$captureStack(Promise[f]);
        var inUserCode = isInUserCode(stack);

        ctx['usedPromise' + capF] = ctx['usedPromise' + capF] || inUserCode;

        return savedClassMethods[f].apply(this, arguments);
      };
    }
  });

  /* eslint-enable no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
