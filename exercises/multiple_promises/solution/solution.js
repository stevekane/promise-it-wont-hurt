function all(promise1, promise2) {
    var fulfill, reject;

    var p = new Promise((ff, rj) => {
        fulfill = ff;
        reject = rj;
    });

    var counter = 0;
    var out = [];

    promise1.then((value) => {
        counter++;
        arr.push(value);

        if (counter === 2) {
            fulfill(out);
        }
    });

    promise2.then((value) => {
        counter++;
        arr.push(value);

        if (counter === 2) {
            fulfill(out);
        }
    })

    return p;
}

all(getPromise1(), getPromise2()).then(console.log);