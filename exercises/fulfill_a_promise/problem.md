# What is a promise?

A promise is an object that defines a method called `then`.
The promise object represents a value (or values) that may
be available some time in the future.

When a promise is resolved, any *"success functions"* registered
with the `then` method will be called with the newly available
data as arguments.

If a promise is rejected then any *"failure functions"* registered
with the `then` method will be called with the `Error` as argument.

For now, do not be concerned with exactly **how** this works or what
the syntax is.  We are about to dive into that in detail.

## Setup

To do many of the lessons in this workshop, you will need an installation of
Node.js that supports ECMAScript 6 promises. That includes Node.js 0.12 or
higher, and all versions of io.js.

To find out if your Node.js installation has native promise support, execute
the following in a Node.js REPL:

```js
typeof Promise !== "undefined"
```

If the REPL returns "true", then you are good to go! If not, you’ll have to use
one of the many shims people have implemented. For this tutorial, we recommend
`es6-promise` which aims to be strictly compliant to ES6 without any extra
features. To use `es6-promise`, execute the following in a shell:

```sh
npm install es6-promise
```

Then, at the beginning of every file in this tutorial, add:

```js
var Promise = require('es6-promise').Promise
```

Now you can use ES6 promises!

## Task

Create a promise using ES6 promise.

Pass `console.log` to the `then` method of your promise.

Manually fulfill that promise using `setTimeout` with a delay of 300ms
and pass it a parameter of `"RESOLVED!"`.

## Hint

A promise is created with `new Promise(cb)`, in which `cb` is a callback with
the signature `function (fulfill, reject)`, where `fulfill` and `reject` are
two other callbacks called from `cb` to indicate the outcome of the operation.
For promises, fulfilling (also called resolving) means that the operation
successfully completes and yields a value, and the value is passed to the
`fulfill` function as the first argument.

As already mentioned above, a promise has a `then` property function. It takes
two optional callbacks, the first to be called when the promise is fulfilled
and a second when the promise is rejected. For now, let’s focus on the first
one. The callback is called with the same value the promise passed to
`fulfill`, and that allows you to operate upon the value resolved by the
promise.

## Boilerplate

```js
var promise = new Promise(function (fulfill, reject) {
  // Your solution here
})

// Your solution here
```
