# Promise followed by promises

So far, you have handled promise fulfillment and rejection, but all your
handlers have been done synchronously like printing text. What if you want to
do something asynchronously?

Let us refer back to the example we used in the first lesson.

```js
Parse.User.logIn('user', 'pass', {
  success: function (query) {
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

Now, if all three functions return promises, you should be able to translate
this code into:

```js
Parse.User.logIn('user', 'pass').then(function (query) {
  query.find().then(function (results) {
    results[0].save({ key: value }).then(function (result) {
      // the object was saved
    });
  });
});
```

That’s quite a lot better: the awkward `success` property functions have been
replaced. However, the despised pattern of “callback hell” is still there: if
you want to do more than three things the code will rack up fairly quickly.

To solve this problem, promises allow you to **return another promise** in the
`then` function callbacks. This new promise you return in the promise will in
turn be returned by `then`, so you can use it to do something after both of
the actions are done. For example, the above code can be replaced by:

```js
var originalPromise = Parse.User.logIn('user', 'pass');

var findPromise = originalPromise.then(function (query) {
  // At this point, you have logged in.

  // query.find() returns another promise, which will become `findPromise`
  return query.find();
});

var savePromise = findPromise.then(function (results) {
  // At this point, the query finding is done.

  // The promise returned by `save` will become `savePromise`
  return results[0].save({ key: value });
});

savePromise.then(function (result) {
  // the object was saved
});
```

which can then be simplified to:

```js
Parse.User.logIn('user', 'pass').then(function (query) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // the object was saved
});
```

That’s quite beautiful, no?

## Task

This task will allow you to demonstrate an understanding how to chain promises
together using `then`.

Two functions will be provided as global functions that you can use: `first`
and `second`.

Call the `first` function in your program. `first()` will return a promise that
will be fulfilled with a secret value.

Call the `second` with the fulfilled value of `first`. Return the promise returned
by `second` in your `onFulfilled` callback.

Finally, print the fulfilled value of that new promise with `console.log`.
