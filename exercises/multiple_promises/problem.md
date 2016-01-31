# Can you do what Async.js does?

When doing asynchronous programming you will often want to perform multiple
operations in parallel. In some cases you may wish to delay further processing
until a list of async operations have completed.

In synchronous code this is trivial because our operations are executed in the
order they are specified:

```js
var thingOne = getThing(1);
var thingTwo = getThing(2);

combine(thingOne, thingTwo);
```

We would like to build a function such that we can specify a list of
asynchronous values we would like to fetch and then use once all are
available.

```js
getAll(fetch(1), fetch(2))
  .then(function (values) {
    console.log(values[0], values[1]);
  });
```

## Task

Let’s build this function!

Create a function `all` that accepts two promises as arguments. This `all`
function should do all of the following:

Create an internal promise in whatever way you see fit.

Create a `counter` variable with initial value of 0.

Attach `then` fulfillment handlers to both promises and increment the internal
counter when the handlers are called.

When the counter reaches 2, fulfill the internal promise with an array
containing **both** values.

Finally return that internal promise to the user.

After you finish writing your `all` function, pass `getPromise1()` and
`getPromise2()` into your new function and then attach `console.log` as a
fulfillment handler to the promise returned by your function. These two
promise-returning functions will be provided to you in the global scope.

## Hint

You probably want to use the good old Promise constructor. If you do find some
other way, please [file an
issue](https://github.com/stevekane/promise-it-wont-hurt/issues); I’m
interested in such a solution!

While this lesson is a good practice for your skills, in real world
programming, such a task is usually achieved by using `Promise.all` utility
function, which we are basically reimplementing. It works by taking an
iterable (like an array) of promises, rather than separate arguments. It also
handles error catching, and any errors will be forwarded.

```js
Promise.all([getPromise1(), getPromise2()])
  .then(onFulfilled, onRejected);
```

In this lesson though, rest assured that that `Promise.all` is disabled 😈
