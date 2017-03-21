# Promise の resolve は常に非同期なのですか？

**ES2015** 仕様では、Promise が作成されたイベントループの同じターンにおいて、 resolve や reject の function を発火**してはいけない**と定義されています。

実行される順序が変更され、結果が不確定になりえるため、これは非常に重要なことです。
Promise の `then` メソッドに渡される関数は、イベントループの**次の**ターンで呼び出されると思って良いです。


## 課題

このレッスンでは、Promise が常に非同期であることを証明します。

まず、Promise コンストラクタを使用して Promise を作成します。
その Promise内 の `executor` で、すぐに `'PROMISE VALUE'` という文字列で Promise を resolve してください。
Promise を作成後、 success ハンドラとして `console.log` を渡してください。
最後に、 `console.log` で "MAIN PROGRAM" と表示してください。


## ヒント

Promise の実行が同期的であれば、Promise の生成と同時に、戻り値は既に判明しています。
`then` に渡された `console.log` は `then` が呼び出されるとすぐに実行されます。
しかし、スクリプトが成功した場合、「PROMISE VALUE」の前に「MAIN PROGRAM」が表示されます。

これは、 Promise が同期的に resolve されたにもかかわらず、提供された関数がイベントループの次のターンまで実行されないことを示しています。

