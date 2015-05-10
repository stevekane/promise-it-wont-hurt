# Qu’est-ce qu’une promesse ?

Une promesse est un objet qui définit une méthode appelée `then`.
L’objet promesse représente une valeur (ou plusieurs valeurs) qui
peuvent n’être disponibles que plus tard dans l’exécution.

Quand une promesse est accomplie, toute *"fonction de succès"*
enregistrée via la méthode `then` sera appelée avec les données
fraîchement disponibles comme argument.

Quand une promesse rejette, toute *"fonction d’échec"* enregistrée
via la méthode `then` sera appelée avec l’`Error` comme argument.

Pour le moment, ne vous souciez pas trop de savoir **comment** ça
marche, ou à quoi ressemble la syntaxe.  Nous allons explorer tout ça
en détail au fil des exercices.

## Mise en place

Pour la plupart des leçons de cet atelier, vous aurez besoin d’une version de Node.js qui prenne en charge les promesses de ECMAScript 6.  Il s’agit de Node.js 0.12 ou supérieur, et de toutes les versions de io.js.

Pour déterminer si votre version de Node.js prend nativement en charge les promesses, exécutez le test suivant dans une REPL Node.js :

```js
typeof Promise !== "undefined"
```

Si la REPL vous indique `true`, alors vous êtes paré-e !  Dans le cas contraire, vous devrez utiliser un des nombreux *shims* (émulations) implémentés par la communauté.  Pour cet atelier, nous recommandons `es6-promise`, qui vise à être strictement conforme à ES6 sans rien ajouter par-dessus.  Pour utiliser `es6-promise`, exécutez la commande suivante dans un terminal, de préférence dans le dossier de votre atelier :

```sh
npm install es6-promise
```

Puis, au début de chaque programme que vous écrirez pour cet atelier, ajoutez :

```js
var Promise = require('es6-promise').Promise
```

Et voilà, vous pouvez utiliser les promesses ES6 !

## Tâche

Créez une promesse ES6.

Passez `console.log` à la méthode `then` de votre promesse.

Accomplissez la promesse manuellement au sein d’un `setTimeout` avec un délai de 300ms, en lui passant le paramètre `"RESOLU !"`.

## Conseils

On crée une promesse avec `new Promise(cb)`, dans laquelle `cb` est une fonction de rappel avec la signature `function(fulfill, reject)`.  Selon que la promesse s’accomplira ou rejettera, vous appelerez depuis le code de la fonction de rappel soit `fulfill` soit `reject`.

On dit qu’une promesse s’accomplit (on parle parfois de résolution) lorsqu’elle réussit à produire une valeur résultat, laquelle est alors passée en argument à `fulfill`.

Comme indiqué plus haut, une promesse a une méthode `then`.  Celle-ci accepte deux fonctions de rappel optionnelles en arguments, la première en cas d’accomplissement, la seconde en cas de rejet.  Pour le moment, concentrons-nous sur la première.  Elle sera appelée avec la même valeur que celle que vous aurez passée à `fulfill`, ce qui nous permet de traiter la valeur d’accomplissement d’une promesse.

## Base de travail

```js
var promise = new Promise(function(fulfill, reject) {
  // Votre solution ici…
});

// …et ici
```
