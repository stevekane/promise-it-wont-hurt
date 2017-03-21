# Promise とそれに続く Promise 

これまでのレッスンで、あなたは Promise と Reject をハンドリングしてきましたが、それらはすべてテキスト表示といった様な同期的なものでした。

しかし、非同期で何かをおこないたい場合もありますよね？
最初のレッスンで使った例を見てみましょう。

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

さて、これら3つの関数すべてが Promise を返すものであった場合、こう書き直すことができるはずです。


```js
Parse.User.logIn('user', 'pass').then(function (user) {
  query.find().then(function (results) {
    results[0].save({ key: value }).then(function (result) {
      // the object was saved
    });
  });
});
```

かなり良くなりました。不合理な `success` プロパティ関数が置き換えられました。
しかし、悪名高い「コールバック地獄」パターンはまだ残っています。
もし3つ以上のことをしたいのであれば、みるみるうちにコードのインデントが深くなるでしょう。

この問題を解決するために、Promise は `then` 関数のコールバックで **別の Promise を返す**ことが出来る様になっています。
あなたが Promise から返す新しい Promise は `then` によって返されるので、両方のアクションが完了した後に何かをする、といった使い方ができます。

たとえば、上記のコードは次のように置き換えることができます。

```js
var originalPromise = Parse.User.logIn('user', 'pass');

var findPromise = originalPromise.then(function (user) {
  // この時点でログイン済になる

  // query.find() は別の Promise を返します。これは `findPromise` になります
  return query.find();
});

var savePromise = findPromise.then(function (results) {
  // この時点でクエリ検索は完了している

  // `save` によって返される Promise は `savePromise` になります
  return results[0].save({ key: value });
});

savePromise.then(function (result) {
  // オブジェクトの保存完了
});
```

これを次のように単純化することができます。

```js
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // オブジェクトの保存完了
});
```

かなり美しくなりましたよね？


## 課題

この課題では、`then` を使って Promise を結び付ける方法を理解します。

あなたのプログラムで `first` 関数（予め用意されています）を呼び出してください。

`first()` は、何らかの値で fulfill される Promise を返します。

`first` が返すその何らかの値を使って、`second` 関数（予め用意されています）を呼び出してください。

`second` によって返された Promise を、あなたの `onFulfilled` コールバックで返してください。

最後に、その新しい Promise の fulfill された値を `console.log` で表示してください。

