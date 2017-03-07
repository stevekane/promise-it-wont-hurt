# Fulfilling a Promise (約束を満たす)

Promise はその状態を表す重要な内部プロパティを持っています。
すなわち Promise は次のいずれかの状態であるといえます。

* fulfilled
* rejected
* pending (fulfilled または rejected されるのを待っている状態)

もしかすると、"resolved" という用語を聞く事があるかもしれません。
今のところそれは fulfilled か rejected のいずれかの状態である、と言い換えられます。

ほとんどの Promise は `new Promise(executor)` を使用して作成されています。
`executor` の中には、`function (fulfill, reject)` というシグネチャのコールバック関数が入ります。
`executor` の中では、操作の結果を示すために、`fulfill` または `reject` のどちらかが呼び出されます。

Promise では、fulfill は操作が正常に完了し、値が生成されたことを意味します。
この値を返すためには、それを最初のパラメータとして `fulfill` 関数を呼び出します。


前回のレッスンで説明したように、 Promise は `then` 関数をプロパティとして持ちます。
それが Promise とその値を操作する主な方法です。
具体的には `onFulfilled` と `onRejected` という2つのオプショナルなコールバックをパラメータに指定します。

1つ目は、Promise が fulfilled になった時に呼ばれ、
2つ目は、Promise が rejected になった時に呼ばれます。

`executor` の中で、ある値と共に `fulfill` 関数が呼び出されると、
その値は Promise の内部を通過し、その後、その1つ目のコールバックが呼び出され、
その値が引数として渡されます。

実際には、あなたは Promise の戻り値を使って何か複数の事を行うために、
`then` 関数を複数回呼び出すことができます。

または一般的に、同じ `onFulfilled` コールバックでそれらをすべて行うことができます。
後者の方が、より簡単にロジックのフローを制御することができます。


パラメータなしで `executor` で `fulfill` 関数を呼び出す場合でも、`onFulfilled` コールバック (複数可) が呼び出されますが、そのコールバックのパラメータは `undefined` になります。

reject に関しては、次のレッスンで話します。

## セットアップ

ES2015 で Promise を使用するには、それをサポートする JavaScript エンジン、もしくは利用可能な多くの Polyfill のいずれか1つを必要とします。

Node.js 0.12 以上、およびすべての io.js のバージョンでは、Promise をネイティブにサポートしています。

もしあなたの Node.js が古いバージョンのままであったとしても心配しないでください。
この workshopper では、Promise 実装が無い環境でも自動的に提供されます。

自分のコードを書くとき、私たちは、`ES6-promise` のポリフィルを使用することをお勧めします。
それは余分な機能を使用せず ES2015 に厳密に準拠することを目指しているので。

`ES6-promise` を使用するには、シェルで次のコマンドを実行します。

```sh
npm install es6-promise
```

そして、アプリ内のメインファイルで、次の行を追加します。

```js
require('es6-promise');
```

今、あなたはどこにでも ES2015 Promise を使用することができます！

## 課題

Promise を作成します。`setTimeout` を使用して、300ミリ秒後に、`executor` の fulfilled で `'FULFILLED!'` という値を返す様にしてください。

そして、(Promiseの) `then` に `console.log` を渡す事で、プロミスが fulfilled になった後に (標準出力に) プリントする様にしてください。

## ボイラープレート

```js
'use strict';

var promise = new Promise(function (fulfill, reject) {
  // ここにソリューションを書く
});

// ここにソリューションを書く
```

