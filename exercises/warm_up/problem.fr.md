# Qu’est-ce qu’une promesse ?

Une des nouvelles fonctionnalités de **ECMAScript 2015** (également
appelé « ES6 ») est un nouveau type d’objets : les promesses.  Il étend
la spécification reconnue **Promises/A+** et fait partie du standard du
langage lui-même.

À la base, une promesse est un objet qui définit une méthode `.then()`.
L’objet promesse représente une valeur qui deviendra disponible plus tard.
Il simplifit grandement les traitements asynchrones en JavaScript.

Par exemple, voici un code écrit de façon traditionnelle, avec des fonctions
de rappel, sans gestion d’erreur :

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

Voici maintenant l’équivalent basé `Promise`, avec une gestion d’erreur
impeccable en prime :

```js
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // l’objet a bien été sauvé
}).catch(function (err) {
  // une erreur est survenue à l’une des étapes
});
```

Les promesses facilitent l’écriture de code asynchrone performant tout
en la rendant plus agréable.

## Tâche

Pour cette première leçon, révisons ce qu’on est censés déjà connaître
en termes d’opérations asynchrones en JavaScript.

En utilisant `setTimeout()`, affichez le texte `'TROP TARD !'` après
300 ms.
