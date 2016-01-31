# Accomplir une promesse

Les promesses ont une propriété interne très importante : leur état.  Une
promesse peut être dans l’un des états suivants :

* accomplie
* rejetée, ou
* en attente, c’est-à-dire qu’elle n’est pas établie (elle n’est ni
   accomplie ni rejetée)

Vous entendrez parfois le terme « résolue » (*resolved*).  Pour ce qui
nous concerne, considérez que cela signifie « accomplie ».

La plupart des promesses sont créées à l’aide du constructeur
`new Promise(executor)`, dans lequel `executor` est une fonction de rappel
avec la signature `function (fulfill, reject)`.  À l’intérieur de celle-ci,
on appellera soit `fulfill` soit `reject`, pour indiquer l’aboutissement de
l’opération.  Pour les promesses, l’accomplissement signifie que l’opération
a abouti avec succès, et produit une valeur.  Afin de transmettre cette
valeur au monde extérieur, on la passe en premier (et unique) argument de
`fulfill`.

Comme indiqué dans la leçon précédente, une promesse a une méthode `then`.
Elle constitue la principale façon de manipuler les promesses et leurs
valeurs.  Elle prend comme paramètres deux fonctions de rappels, toutes deux
optionnelles : `onFulfilled` et `onRejected`.  La première sera appelée si
la promesse s’accomplit, la seconde si la promesse rejette.  Lorsque le
code de `executor` appelle la fonction `fulfill` qu'il a reçu, la machinerie
de la promesse la transmet jusqu'à appeler la première fonction de rappel
fournie à `then`, avec cette même valeur.

En pratique, vous pouvez appeler la méthode `then` plusieurs fois, pour
effectuer plusieurs traitements distincts sur la valeur d’une promesse.
Plus fréquemment, vous les ferez tous dans la même fonction de rappel
`onFulfilled`, ce qui vous permettra de les articuler plus subtilement.

Si, depuis le code de `executor`, vous appelez la fonction de rappel
`fulfill` sans argument, les fonctions de rappels `onFulfilled` seront
toujours appelées, mais leur argument sera `undefined`.

Nous parlerons des cas de rejet dans la prochaine leçon.

## Mise en place

Pour utiliser les promesses ES2015, il vous faudra un moteur JavaScript
qui les prenne en charge, ou un des nombreux *polyfills* disponibles.
Node 0.12 et supérieur, ainsi que les quelques versions de io.js, ont toutes
cette prise en charge native.  Toutefois, si vous êtes coincé-e sur une
version trop ancienne de Node.js, ne vous inquiétez pas : pour cet atelier,
une implémentation des promesses sera **automatiquement fournie** si le
moteur n’en propose pas.

Lorsque vous écrirez votre propre code, si vous n’avez pas les promesses
natives à disposition, nous vous recommandons le *polyfill* `es6-promise`,
qui fournit une émulation strictement conforme de la version native, sans
aucune fioriture.  Pour l'utilisez, vous n'aurez qu'à l'installer en tapant
la commande suivante :

```sh
npm install es6-promise
```

Puis, dans le code de votre application, vous n'aurez qu’à faire :

```js
var Promise = require('es6-promise').Promise;
```

Ainsi vous pourrez utiliser des promesses ES2015 partout !

## Tâche

Créez une promesse, puis accomplissez-la avec la valeur `'ACCOMPLIE !'`
depuis le code de `executor`, après un délai de 300 ms obtenu grâce à
`setTimeout`.

Ensuite, affichez la valeur de la promesse après accomplissement en la
passant à `console.log` depuis votre fonction de rappel passée à `then`.

## Base de travail

```js
'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Votre solution ici
});

// Votre solution ici
```
