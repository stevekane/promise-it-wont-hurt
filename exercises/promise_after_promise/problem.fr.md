# Enchaînement de promesses

Jusqu’ici, vous avez traité l’accomplissement et le rejet de promesses,
mais vos gestionnaires ont toujours été des traitements synchrones, comme
l’affichage de texte.  Que se passerait-il si vous vouliez effectuer des
traitements asynchrones ?

Reprenons l’exemple de la première leçon.

```js
Parse.User.logIn('user', 'pass', {
  success: function (user) {
    query.find({
      success: function (results) {
        results[0].save({ key: value }, {
          success: function (result) {
            // l’objet a bien été sauvé
          }
        });
      }
    });
  }
});
```

Alors, si les trois fonctions renvoyaient des promesses, on pourrait
transformer ce code en ceci :

```js
Parse.User.logIn('user', 'pass').then(function (user) {
  query.find().then(function (results) {
    results[0].save({ key: value }).then(function (result) {
      // l’objet a bien été sauvé
    });
  });
});
```

C’est déjà beaucoup mieux : la boiteuse option `success` a été remplacée.
Néanmoins, le schéma détestable du « Callback Hell » est toujours là : si
nous voulons faire davantage que ces trois traitements, le code va enfler
assez rapidement.

Pour résoudre ce problème, les promesses nous permettent de **renvoyer une
autre promesse** depuis les fonctions de rappel de `then`.  La nouvelle
promesse ainsi renvoyée sera celle renvoyée par `then`, de sorte que vous
pouvez enchaîner une fois les deux traitements terminés.  Par exemple, le
code ci-avant peut être réécrit comme suit :

```js
var originalPromise = Parse.User.logIn('user', 'pass');

var findPromise = originalPromise.then(function (user) {
  // À ce stade, l’identification est faite

  // query.find() renvoie une autre promesse, qui deviendra `findPromise`
  return query.find();
});

var savePromise = findPromise.then(function (results) {
  // Et maintenant, la requête de recherche est terminée

  // La promesse renvoyée par `save` deviendra `savePromise`
  return results[0].save({ key: value });
});

savePromise.then(function (result) {
  // l’objet a bien été sauvé
});
```

Et on peut simplifier tout ça ainsi :

```js
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // l’objet a bien été sauvé
});
```

C’est déjà beaucoup plus élégant, non ?

## Tâche

Cette tâche va vous permettre de démontrer une compréhension des enchaînements
de promesses à l’aide de `then`.

Appelez la fonction `first` dans votre programme. `first()` renverra une promesse
qui sera accomplie avec une valeur secrète.

Appelez la fonction `second` avec la valeur accomplie par `first`.  Renvoyez la
promesse ainsi obtenue, depuis votre fonction de rappel `onFulfilled`.

Pour finir, affichez la valeur obtenue par cette dernière promesse à l’aide de
`console.log`.
