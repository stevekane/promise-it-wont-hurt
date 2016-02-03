# Promets-moi… plus vite

La spécification ES2015 définit quelques raccourcis qui facilitent la
création et la manipulation des promesses.

Le premier est `.catch`.  Jusqu’ici nous avons appris à gérer le rejet
d’une promesse -- grâce au second argument de la méthode `.then`.  Toutefois,
il arrive que vous souhaitiez traiter le rejet, mais pas l’accomplissement.
Dans de tels cas, puisque la fonction de rappel `onFulfilled` est
optionnelle, vous pouvez passer `null` à la place.  Cependant, il existe une
manière plus simple d’obtenir le même résultat en utilisant `.catch`.  Au
lieu d’écrire :

```js
promise.then(null, function (err) {
  console.error('IL Y A UN SOUCI !');
  console.error(err.message);
});
```

…vous pourriez juste écrire :

```js
promise.catch(function (err) {
  console.error('IL Y A UN SOUCI !');
  console.error(err.message);
});
```

Cette notation a l’avantage de faciliter la compréhension des personnes
qui ne sont pas encore au fait des promesses, car la signification de
`.catch` pour quiconque a déjà fait du JavaScript est assez évidente.

Les 2e et 3e raccourcis sont `Promise.resolve` et `Promise.reject`.
Les exemples ci-dessous devraient vous éclairer :

```js
// Comme vous l’avez appris : on crée la promesse avec le constructeur.

var promise = new Promise(function (fulfill, reject) {
  fulfill('VALEUR SECRETE');
});

// Et maintenant : Promise.resolve
// Ça fait exactement la même chose.

var promise = Promise.resolve('VALEUR SECRETE');


// Et dans le même genre…

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('OH LE SOUCI'));
});

var promise = Promise.reject(new Error('OH LE SOUCI'));
```

## Tâche

Nous n’avons pas de tâche spécifique que vous devez réaliser pour cette
leçon.  Sentez-vous libre d’explorer ces trois méthodes à votre rythme.
Cependant, quand vous serez prêt-e à soumettre votre code, assurez-vous
que celui-ci utilise au moins `catch` et soit `Promise.resolve`, soit
`Promise.reject` ☺
