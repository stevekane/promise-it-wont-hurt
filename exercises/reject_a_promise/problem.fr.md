# Rejeter une promesse

Lorsqu’une promesse est rejetée, cela indique généralement (mais pas toujours)
qu‘une valeur n’a pas pu être obtenue par la promesse.  Une fois que la
promesse a été rejetée, elle ne peut plus jamais être résolue (ou rejetée à
nouveau).

Les promesses implémentent une machine à états interne avec des règles strictes
pour éviter qu’une promesse n’ait un état invalide (qui ne soit ni en attente,
ni accompli ni rejeté).

## Tâche

Utilisez `q` pour créer une promesse.

Créez une fonction qui affiche `error.message` à l’aide de `console.log`. Passez
cette fonction comme gestionnaire de rejet à la méthode `then` de votre promesse
(2e argument).

Rejetez manuellement la promesse au sein d’un `setTimeout` avec un délai de
300ms et passez-lui comme argument un objet `Error` créé avec le message
`"REJETE !"`.

## Base de travail

```js
var q = require('q');
var defer = q.defer();

// Votre solution ici
```
