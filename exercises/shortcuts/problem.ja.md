# Promise せよ。もっと早く！

ES2015 の仕様では、Promise をより早く、容易に作成・作業するためのショートカットが定義されています。

1つ目は `.catch` です。

これまでに私達は `.then` 関数の第2引数を使って、Promise の reject を処理する方法を学びました。

しかし、時には success を処理する必要がなく、reject のみを処理したい場合もあるでしょう。
そのような場合、`onFulfilled` コールバックはオプションなので、`null` を指定することができます。

しかし、もっと簡単な方法は、 `.catch` を使うことです。

こう書く代わりに

```js
promise.then(null, function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

シンプルにこう書けます

```js
promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

JavaScript プログラミングを行った事がある人にとって、`catch` が何を意味するのかはかなり明白であるため、この表記法は Promise をまだ知らない人に、構文を理解しやすくするという利点があります。

2つ目と3つ目は、 `Promise.resolve` と ` Promise.reject` です。

以下のコード例は、それらの動作を的確に示しています。

```js
// コンストラクタで Promise を作成する方法はは、既に学びました。

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

// Promise.resolve の例
// 上記と全く同じことを行っています：

var promise = Promise.resolve('SECRET VALUE');


// 同様に...

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));
``` 

## 課題

このレッスンであなたが行なう具体的な課題はありません。
自分のペースで自由に先述の3つの Function を試してください。

課題の提出をする前に、少なくとも `catch` と `Promise.resolve` と `Promise.reject` のどちらかを使用していることを確認してください

