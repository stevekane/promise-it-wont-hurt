# Can you do what `async` does?

When doing asynchronous programming you will often want to
perform multiple operations in parallel.  In some cases
you may wish to delay further processing until a list of
async operations have completed.

In synchronous code this is trivial because our operations
are executed in the order they are specified:

```js
var thingOne = getThing(1);
var thingTwo = getThing(2);

combine(thingOne, thingTwo);
```

We would like to build a function such that we can specify a list
of asynchronous values we would like to fetch and then use once all
are available.

```js
getAll([fetch(1), fetch(2)])
.then(function (first, second) {
  console.log(first, second);
});
```

## Task

Let's build this function!

1) Construct two promises using Q's `defer()`
2) Construct a function `all` that accepts two promises as arguments.
   Your function should:

   a) Create an internal promise using Q's `defer()` and return it!
   b) Create a `counter` variable with initial value of 0.
   c) Attach `then` fulfillment handlers to both promises which increment an internal counter
   d) **if** the counter reaches 2, fulfill the internal promise with an array
      containing **both** values.
   e) **Also** attach rejection handlers to both promises which both reject the internal promise!

3) Pass your two promises into your new function and then attach `console.log` as
   a fulfillment handler to the promise returned by your function.
4) Attach a function to `setTimeout` that resolves both of the promises you created
   and passed to your function with the values `"PROMISES"` and `"FTW"`, respectively.
   Set the timeout delay to 200ms.

**TIP:** Don't forget to pass the `promise` attribute of your deferreds!

If your function is successful it should print out ["PROMISES", "FTW"] which is
just someone's opinion man!

## Bonus

Try using Q's `all` method to replace your function.  Note that their implementation
expects you to pass it an **array** of promises, not as individual arguments.

## Super Bonus

Try using Q's `spread` method to replace your `then` handler on the promise returned
by `all`.  Note that spread will return individual arguments, which should affect
your output slightly!

`Q.all`, `.spread`, etc are just some of the many promise utility functions that many
promise libraries make available or that you can easily build for yourself.  The
composability of promises (due to them being re-ified objects) is a huge upside
and you can quickly discover many amazing patterns for building async systems.
