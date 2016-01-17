# Fulfilling a Promise

## Task

Create a promise using ES2015 promise. Manually fulfill that promise using
`setTimeout` with a delay of 300ms and pass it a parameter of `'RESOLVED!'`.

Then, print the contents of the promise after if has been fulfilled using
`console.log`.

## Hint

Most promises are created with `new Promise(executor)`, in which `executor` is
a callback function with the signature `function (fulfill, reject)`. Inside
`executor`, either `fulfill` or `reject` is called, to indicate the outcome of
the operation. For promises, fulfilling means that the operation successfully
completes and yields a value. In order to pass this value along, call `fulfill`
function with this value as the first parameter.

As mentioned in the last lesson, a promise has a `then` property function. It
is the main way of manipulating promises and their values. It takes two
optional callback parameters `onFulfilled` and `onRejected`: the first will be
called when the promise is fulfilled, and the second when the promise is
rejected.  When the `fulfill` function is called in `executor` with a value,
the promise internals pass it along, and then call this first callback with the
same value.

In practice, you can call the `then` property function multiple times, to do
multiple things with the value of the promise. Or, more commonly, you could do
them all in the same `onFulfilled` callback, which allows you to control more
easily the logic flows.

If you call `fulfill` function in the constructor without a parameter, the
`onFulfilled` callback(s) will still be called, but the parameter to those
callbacks will be `undefined`.

We will talk about rejecting in our next lesson.

## Boilerplate

```js
'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
});

// Your solution here
```
