# What is a promise?

One of the new features in **ECMAScript 2015** (also called “ES6” and
“Harmony”) is a new type of objects: promises. It extends the widely known
**Promise/A+** specification and standardizes it to be part of the language
core.

In its most basic terms, a promise is an object that defines a method called
`then`. The promise object represents a value that may be available some time
in the future. It greatly simplifies asynchronous logic in JavaScript.

Compare the following code, written in the more traditional idiom of
asynchronous callbacks, with no error handling:

```js
Parse.User.logIn('user', 'pass', {
  success: function (user) {
    query.find({
      success: function (results) {
        results[0].save({ key: value }, {
          success: function (result) {
            // the object was saved
          }
        });
      }
    });
  }
});
```

And the much more elegant Promise workflow, with first-class error handling:

```js
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // the object was saved
}).catch(function (err) {
  // an error happened somewhere in the process
});
```

Promises make writing performant, asynchronous code much easier and more fun.

## Setup

To use ES2015 Promises, you need either a JavaScript engine that supports it,
or one of the many polyfills available. Node.js 0.12 or higher, and all
versions of io.js, have native promise support. However, if you are stuck with
an older version of Node.js, don’t fret: for this workshopper, a promise
implementation will be automatically supplied if none is available.

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

For this first lesson, let’s review what we already know about asynchronous
operations in JavaScript.

Using `setTimeout`, print the string `'TIMED OUT!'` after 300ms.
