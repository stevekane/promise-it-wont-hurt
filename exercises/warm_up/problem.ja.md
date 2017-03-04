# Promise って何？

**ECMAScript 2015** ("ES6"、"Harmony"とも呼ばれます) の新機能の一つに、新しいオブジェクトの型: Promise があります。
それは、**Promise/A+** として広く知られている仕様が拡張され、言語のコアの一部として標準化されたものです。

最も基本的な事は、「Promise は `then` と呼ばれるメソッドが定義されたオブジェクトである」という事です。
Promise オブジェクトは「未来のどこかの時点で利用可能となる値」を表現します。
これにより JavaScript における非同期ロジックをとてもシンプルに表現できる様になります。

以下のコードを見比べてください。

まずは、伝統的なイディオムで書かれた非同期コールバックのコードです。
エラー処理はありません。

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

次に、Promise のワークフローです。
はるかにエレガントな上に、ファーストクラスのエラー処理を持ちます。


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

Promise を使えば、非同期のコードをより簡単に、楽しく、効率的に書ける様になります。

## 課題

最初のレッスンとして、まずは JavaScript での非同期操作について再確認しましょう。

`setTimeout` を使って、300ms 後に `'TIMED OUT!'` と文字列を表示してください。

