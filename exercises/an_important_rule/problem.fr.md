# Attrape-moi si tu peux

Les promesses sont conçues pour émuler les flux de contrôle
synchrones.  Si l’une d’elles lève une exception, celle-ci va
remonter à travers la pile jusqu’à être attrapée par un bloc
`catch` ou arriver au contexte global, auquel cas elle sera
levée à nouveau.

Dans le code ci-dessous, chaque expression est évaluée l’une
après l’autre.  Si une expression lève une exception, **toutes
les expressions ultérieures seront ignorées** et le bloc `catch`
la rattrapera pour la gérer.

```js
try {
  doStuff()
  doMoreStuff()
} catch (err) {
  complainAboutJavascript(err);
}
```

Avec les promesses, on peut produire un flux de contrôle très
similaire à celui que nous venons d’illustrer (en supposant que
toutes les fonctions renvoient des promesses) :

```js
doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript);
```

Peut-être seriez-vous tenté-e de combiner les deux dernières lignes,
puisque la première définit un gestionnaire d’accomplissement et la
deuxième un gestionnaire de rejet ?  **NON !**  Ce serait une erreur.
Si cela peut sembler valable à première vue, imaginez ce qui se
passerait si `doMoreStuff` levait une erreur.  Puisque la promesse
qu’il renvoie serait rejetée, elle chercherait le **prochain**
gestionnaire d’erreur pour être traitée.

Souvenez-vous : une promesse ne peut **jamais** être résolue (accomplie
ou rejetée) plus d’une fois, donc un seul gestionnaire par `then` est
appelé.

En conséquence, une bonne pratique consiste à toujours placer un
gestionnaire de rejet à la fin des chaînes de promesses (un peu comme
un bloc `catch`).

Précisons aussi que ce comportement vaut pour les codes synchrones
**et** asynchrones.  Si le gestionnaire de rejet lève lui-même une
erreur, vous aurez un souci.

De nombreuses bibliothèques de promesses essaient de pallier à ce
problème en vous fournissant un gestionnaire `done` pour traiter toute
erreur qui n’aurait pas encore été traitée.  La règle d’or est simple :

> Si vous **ne renvoyez pas** de valeur depuis votre promesse vers
> le code appelant, ajouter un gestionnaire `done` en fin de chaîne
> pour vous protéger contre les exceptions non traitées.

Voici un exemple :

```js
doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript)
.done();
```

## Tâche

Nous allons visualiser ce comportement nous-mêmes en créant une chaîne
de fonctions qui affichent **toutes** dans la console.

1. Écrivez une fonction `alwaysThrows` qui lève une `Error` avec le texte
    « OH NOES » ;
2. Écrivez une fonction `iterate` qui affiche son premier argument (un
    nombre entier) et le renvoie augmenté de 1 ;
3. Construisez une chaîne de promesses qui enrobe votre fonction `iterate`
    à l’aide du `fcall` de Q, puis fait une série d’étapes pour tenter
    d’appeler `iterate` un total de 10 fois ;
4. Ajoutez un `console.log` comme gestionnaire de rejet en fin de chaîne ;
5. Insérez un appel à `alwaysThrows` après le 5e appel à `iterate`.

Si vous avez fait tout ça correctement, votre code devrait afficher
1, 2, 3, 4, 5, "[Error: OH NOES]".  Remarquez comme l’exception levée a
été transformée en promesse rejetée, ce qui l’a fait voyager le long
de la chaîne de promesse jusqu’au premier gestionnaire de rejet disponible.

## Bonus

Essayez de remplacer votre gestionnaire de rejet `console.log` par
`alwaysThrows`.  Votre programme va maintenant faire péter une exception dans
le contexte global.  Argh !  Essayez de corriger ça en utilisant l’approche
décrite plus haut.
