# エラーがスローされたらどうなりますか？

Promise の大きな強みの1つは、同期的なコードと同様の方法でエラー処理が出来ることです。
従来のコールバックベースのコードとは異なり、すべてのエラーを厳密に逐次処理する必要はありません。
関数内にエラーがスローされた場合、それをキャプチャすることができます。
ある関数の中にエラーがスローされた場合、次の利用可能な *"reject"* ハンドラによって処理されます。

これにより、あたかも `try` / ` catch` ブロックの様な同期的に見えるコードを書くことができます。

```js
try {
  doSomethingRisky();
  doAnotherRiskyThing();
} catch (e) {
  console.log(e);
}
```

同等の "Promise 化された" コードは次のようになります。

```js
doSomethingRisky()
  .then(doAnotherRiskyThing)
  .then(null, console.log);
```

## 課題

上記のシステムを正確に構築しましょう。
部分的に無効な JSON が `process.argv [2]` で与えられます。

1.`try` / `catch` ブロックで `JSON.parse` を実行し、エラーがスローされたかどうかに応じて Promise を fulfill するか reject するかを判断する Promise を作成して返す `parsePromised` という関数を作ります。

   **注意：**あなたの関数は同期的に Promise を返すべきです！

2.スローされたエラーをキャッチし、それらをコンソールに記録する (先述のような) 一連のステップを構築します。

