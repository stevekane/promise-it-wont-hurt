# "リアルに" 役立つレッスン

**HTTP 経由で JSON をフェッチしよう！**

AJAX 経由でリモートマシンから JSON データを取得することは、サーバーとクライアントの両方で一般的な事です。
Promise は AJAX にも大変うまく対応できます。
どんな AJAX リクエストも、成功するか、失敗します。両方は起こりえません。
Promise は Fulfill されるか Reject されるかです。両方は起こりえません。

ね、親和性高そうでしょう？

`q-io` という新しいモジュールを使って、成功した HTTP レスポンスボディの値の Promise を返す `http.read` メソッドを利用しましょう。


次のように入力してインストールしてください:

```sh
$ npm install q-io --save
```

## 課題

localhost:1337 (*http://localhost:1337*) から JSON をフェッチして、`console.log` に出力します。
いくつか知っておくべき事がります：

1.`q-io` の `http` モジュールには成功した (ステータス200) HTTP リクエストの内容の Promise を返す `read` メソッドがあります。
2.返された JSON を解析し、 `console.log` に出力してください。それだけ。

この課題は少しトリッキーですが、実装は比較的簡単です。
動かない場合は、`q-io` のドキュメントを参照してください：


  github.com/kriskowal/q-io https://github.com/kriskowal/q-io

