# What is a promise?
A promise is an object that lets a consumer attach success and failure
handlers to an asyncrhonous operation. If the operation succeeds,
the function you register using the promises `then` function
will be called with the result of the operation. If the operation
fails, the function you register with the promises
`catch` function is called.

Just as the promise consumer can register for success or failure
of the asynchronous operation, the producer of a promise needs to
communicate success or failure. When the operation completes successfully,
the producer calls a `resolve` function with the result of the operation.
If the operation failed, the producer is responsible for calling the
`reject` function with the error describing the failure.

## Setup

The `q` module is the promise library used for this set of exercises.
Install it in your project directory using:
```sh
$ npm install q
```

You can now reference it in your JavaScript file using:

```js
var q = require("q");
```

## Task

The producer of a promise works with a deferred object obtained
by calling call's q's `defer` function. The promise object to give to the
consumer is a property of the deferred object.

Write a file that is both producer and consumer of a promise. The consumer
should write the data it recieves in the `then` handler to the console.
The producer should resolve the promise, passing it the text "RESOLVED!".

## Boilerplate

```js
var q = require('q');
var defer = q.defer();
// defer.promise is the actual promise itself
// defer.promise.then(function(value){}) is the "Q" way of attaching a success handler
// defer.resolve(data) is how you tell the consumer the operation succeeded

// your solution here