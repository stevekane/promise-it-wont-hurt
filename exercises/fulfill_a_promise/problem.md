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

To do many of the lessons in this workshop, you will need to install
the `q` module.  To do this, type the following in your project's
directory:

```sh
$ npm install q --save
```

This will install a local copy of the `q` module into your directory
which you can import into the file you have written using:

```js
var q = require('q');
```

## Task

Use the popular `q` library to create a promise.

Pass `console.log` to the `then` method of your promise.

Manually resolve that promise using `setTimeout` with a delay of 300ms
and pass it a parameter of `"RESOLVED!"`.

In Q, promises are created using `Q.defer()`.

The *deferred* that is created is not exactly the promise, and in order
to return the actual promise object itself you must return the `promise`
attribute of the newly created *deferred*.

## Boilerplate

```js
var q = require('q');
var defer = q.defer();
// defer.promise is the actual promise itself
// defer.promise.then is the "Q" way of attaching a then handler

// your solution here
```
