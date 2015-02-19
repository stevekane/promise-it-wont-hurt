# Refactorisons la leçon précédente dans un style plus déclaratif !

La programmation fonctionnelle porte sur elle des stygmates qui peuvent
effrayer certains.  C’est bien dommage, car elle permet pourtant d’écrire du
code lisible et élégant rien qu’avec une petite partie de ses approches.

La leçon précédente est une excellente candidate à un *refactoring* vers une
approche de programmation fonctionnelle.  Voici son code, si vous ne l’aviez
pas encore :

```js
var q = require('q')
  , qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();
```

Refactorisons ça à l’aide de la bibliothèque populaire `lodash`.  Installez-la
comme ceci :

```sh
$ npm install --save lodash
```

Pour être plus précis, vous aurez sans doute besoin de `_.bind()`,
`_.compose()` et peut-être d’autres méthodes pour votre refactoring.

La solution devrait fonctionner d’entrée de jeu, puisque le problème est le
même que dans l’exemple précédent.  Concentrez-vous plutôt sur les meilleures
manières d’utiliser la composition de fonctions et l’application partielle
pour rendre votre chaîne de promesses aussi déclarative que possible.

Référez-vous à la solution fournie une fois que vous serez allé-e aussi loin
que vous pensez le pouvoir, et voyez si vous comprenez complètement son code
source.
