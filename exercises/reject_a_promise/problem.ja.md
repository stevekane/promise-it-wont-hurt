# プロミスを拒否する

前回のセッションを終えたあなたは、 Promise を作成し、ある値でそれを fulfill し、その値を Promise の履行後に読み取る、と言う事ができる様になっているはずです。

ただしすべての Promise が正常終了するとは限りません。時にはエラーが発生する場合もありえます。
そこで、Promise の reject (拒否) の出番です。

Promise が reject される場合として典型的なケース (常にではないが) としては、戻り値が Promise の正常終了によって得られなかったことを示す場合です。
正常終了を妨げる特定のエラーを返す方法を、Promise が提供します。

一度 Promise が reject されたら、それが fulfill される (または再び reject される) ことはありません。Promise のこの側面は、次のレッスンでより深く追求します。

## 課題

`Error` オブジェクトと共に、300ms 後に reject する Promise を作成してください。

`Error` オブジェクトには、エラーメッセージとなる文字列 `'REJECTED!'` を、そのコンストラクタでパラメータとして与える様にしましょう。

`console.log` を使用して、`error.message` と表示する関数 `onReject` を作成します。 
作成済の Promise の `then` メソッドに拒否ハンドラとして、この関数を渡す様にしてください。


## ヒント

前回のレッスンで学んだとおり、Promise の `then` 関数は2つのコールバックをとります：
1つ目は Promise が成功したときに呼び出され、2つ目は Promise が拒否されたときに呼び出されます。

## ボイラープレート

```js
var promise = new Promise(function (fulfill, reject) {
  // ここにソリューションを書く
});

function onReject (error) {
  // ここにソリューションを書く
}

// ここにソリューションを書く
```
