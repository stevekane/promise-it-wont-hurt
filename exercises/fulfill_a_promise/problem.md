# Fulfilling a Promise

Promises have an important internal property: its state. A promise is one of:

* fulfilled,
* rejected, or
* pending, which is the state of a promise waiting to be fulfilled or rejected.

Sometimes you will also hear the term “resolved.” For now, you can treat it as
meaning either fulfilled or rejected.

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

If you call `fulfill` function in `executor` without a parameter, the
`onFulfilled` callback(s) will still be called, but the parameter to those
callbacks will be `undefined`.

We will talk about rejecting in our next lesson.

## Setup

To use ES2015 Promises, you need either a JavaScript engine that supports it,
or one of the many polyfills available. Node.js 0.12 or higher, and all
versions of io.js, have native promise support. However, if you are stuck with
an older version of Node.js, don’t fret: for this workshopper, a promise
implementation will be **automatically supplied** if none is available.

When writing your own code, we recommend using `es6-promise` polyfill, since it
aims to be strictly compliant to ES2015 without any extra features. To use
`es6-promise`, execute the following in a shell:

```sh
npm install es6-promise
```

Then, in the main file in your app, add the following line:

```js
require('es6-promise');
```

Now you can use ES2015 promises everywhere!

## Task

Create a promise. Have it fulfilled with a value of `'FULFILLED!'` in
`executor` after a delay of 300ms, using `setTimeout`.

Then, print the contents of the promise after it has been fulfilled by passing
`console.log` to `then`.

## Boilerplate

```js
'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
});

// Your solution here
```
