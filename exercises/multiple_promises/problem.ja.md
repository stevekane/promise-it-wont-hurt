# 同期処理で何がきる？

非同期プログラミングにおいて、しばしば複数の処理を並行して行いたい場合があります。
場合によっては、一連の非同期処理が全て完了するまで待って、処理を遅延実行させたい事もあるでしょう。

同期コードではそれは簡単です。なぜなら処理は指定された順序で実行されるからです:

```js
var thingOne = getThing(1);
var thingTwo = getThing(2);

combine(thingOne, thingTwo);
```

値をフェッチする非同期処理のリストを渡し、すべてが揃ったら、それを使う関数を構築したいと思います。


```js
getAll(fetch(1), fetch(2))
  .then(function (values) {
    console.log(values[0], values[1]);
  });
```

## 課題

この関数を作ろう！

2つの Promise を引数として受け取る `all`関数を作成してください。
この `all` 関数は次のすべてを行う必要があります：

内部で Promise を作りましょう。方法は問いません。おまかせします。

初期値が 0 の `counter` 変数を作りましょう。

両方の Promise に fulfillment ハンドラを接続し、ハンドラが呼び出されると `counter` をインクリメントします。

`counter` が2に達すると、**両方の** Promise の戻り値を含む配列で内部の Promise を fulfill します。

最後に、その内部 Promise をユーザに返します。

`all` 関数を定義したら、その関数に `getPromise1()` と `getPromise2()` を (引数として) 渡してから、その関数によって返される Promise の fulfillment ハンドラとして `console.log` をアタッチします。
(引数の) 2つの Promise を返す関数は、グローバルスコープで提供されます。


## ヒント

おそらく、(古き良き) Promise コンストラクタを使用する事になるでしょう。
他の方法があるよという場合は、是非 [issueを登録](https://github.com/stevekane/promise-it-wont-hurt/issues) してください。楽しみにしています。

この課題はスキル習得としては良いですが、実際のプログラミングでは、通常、`Promise.all` ユーティリティ関数を使用して実現できます。
簡単に再実装してみましょう。

独立した引数ではなく、イテレータブルな (配列等で) Promise を渡します。
また、エラーはキャッチ・処理し、フォワードしない様にします。

```js
Promise.all([getPromise1(), getPromise2()])
  .then(onFulfilled, onRejected);
```

しかしこの課題では `Promise.all` は使えない事を忘れないでください。😈

