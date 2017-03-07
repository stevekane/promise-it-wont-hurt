# Promise を reject あるいは resolve すると何が起こるの？

**ES2015** 仕様上の定義では、一度 Fulfill (resolve) または reject された Promise は、二度とその状態を変えることは出来ないとされています。
これは Promise の重要な特徴であると共に、`EventEmitter`（および他の形式の繰り返し可能なコールバック）と異なる点の一つでもあります。

コールバックスタイルのコードでは、通常、関数本体のどこかで、渡されたコールバック関数を呼び出す事が求められます。
(全てではないにしても) 多くの場合、その関数は一度だけ呼び出されることが意図されます。
しかし、ロジックのエラー、構文の問題、またはその他の単純な間違いによって、コールバックが複数回呼び出される可能性があり、それが時にあなたのアプリケーションに狡猾なバグや厄介な状態を引き起こします。



```js
/*
 * これは良くないコードです。渡されたコールバック関数を2回以上呼び出すという
 * 厄介な結果をもたらします（なんという事でしょう。この世の終わりです！）。
 * 普通は最初のコールバックの呼び出し時に return するものですが、書き忘れやすいです！
 */
function myFunc(user, callback) {
  if (user) {
    callback(null, user);
  }

  return callback('No user was found', null);
}
```

## 課題

Promise が1回だけ resolve でき、それ以降の resolve の試みはすべて無視されるということを**証明**するための簡単なスクリプトを作成してみましょう。


まず、これまで通り Promise コンストラクタを使って Promise を作成してください。

その Promise の `executor` で、即座に `'I FIRED'` という値で Promise を fulfill (resolve) してください。

その直後、`I DID NOT FIRE` パラメータで作成された `Error` オブジェクト を使って Promise を reject しようとしてください。

Promise を作成した後、`error` パラメータを持ち、`console.log` で、その Error オブジェクトの message を出力する `onRejected` 関数を作成してください。

最後に、(作成した Promise に) 成功・失敗のハンドラとして、`console.log` と onReject 関数をそれぞれ渡してください。

成功した場合、スクリプトは「I FIRED」だけをログに記録します。「I DID NOT FIRE」は記録**されません**。

これまでの演習とは異なり、`setTimeout` を使う必要はありません。


