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

Pour la plupart des leçons de cet atelier, nous allons utiliser le
module tiers `q`.  Pour l‘installer, tapez ce qui suit dans le répertoire
de votre projet :

```sh
$ npm install q --save
```

Cette commande va installer une copie locale du module `q` dans votre
dossier, que vous pourrez ensuite importer dans vos fichiers sources
en écrivant :

```js
var q = require('q');
```

## Tâche

Utilisez la bibliothèque populaire `q` pour créer une promesse.

Passez `console.log` à la méthode `then` de votre promesse.

Accomplissez la promesse manuellement au sein d’un `setTimeout` avec
un délai de 300ms, en lui passant le paramètre `"RESOLU !"`.

Dans Q, les promesses se créent à l’aide de `Q.defer()`.

Le *deferred* qui est ainsi créé n’est pas la promesse à proprement parler,
et pour obtenir la véritable promesse il vous faudra utiliser la propriété
`promise` du *deferred* fraîchement créé.  Par ailleurs, Q nomme à tort
l’accomplissement `resolve()` au lieu de `fulfill()`.

## Base de travail

```js
var q = require('q');
var defer = q.defer();
// defer.promise est la promesse à proprement parler
// defer.promise.then est la façon "Q" d’ajouter un gestionnaire de traitement

// Votre solution ici
```
