'use strict';

function wrap(ctx) {
  /* eslint-disable no-extend-native, no-param-reassign, no-native-reassign, no-undef */
  var p;
  var savedPrototype;

  function isInUserCode(stack) {
    return stack[0].getFileName().substring(0, ctx.mainProgram.length)
      === ctx.mainProgram;
  }

  ctx.thenAttachTitle = false;
  ctx.thenAttachTitleSync = false;

  require('es6-promise');
  p = Promise;

  savedPrototype = {
    then: p.prototype.then,
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var stack = ctx.$captureStack(Promise.prototype.then);
    var inUserCode = isInUserCode(stack);
    var isAttachTitle = inUserCode && onFulfilled.name === 'attachTitle';

    if (isAttachTitle) {
      ctx.thenAttachTitle = true;
    }

    return savedPrototype.then.call(this, isAttachTitle ? function (val) {
      var returned = onFulfilled(val);
      if (!returned.then) {
        ctx.thenAttachTitleSync = true;
      }
      return returned;
    } : onFulfilled, onRejected);
  };

  /* eslint-enable no-extend-native, no-param-reassign, no-undef */
}

wrap.wrapSubmission = true;
wrap.wrapSolution = true;

module.exports = wrap;
