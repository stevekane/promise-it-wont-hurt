# Peut-on faire ce que fait Async.js ?

Lorsqu’on programme en asynchrone, on a souvent besoin d’exécuter
plusieurs opérations en parallèle.  Dans certains cas, vous voudrez
même reporter les traitements suivants jusqu’à ce qu’une liste
d’opérations asynchrones soient toutes terminées.

Dans du code synchrone, ce serait trivial à faire parce que les
opérations sont exécutées dans l’ordre où elle sont écrites :

```js
var thingOne = getThing(1);
var thingTwo = getThing(2);

combine(thingOne, thingTwo);
```

Nous aimerions créer une fonction qui nous permette de spécifier une liste
de valeurs asynchrones que nous aimerions récupérer, et qui nous redonne
la main une fois qu’elles sont toutes disponibles.

```js
getAll([fetch(1), fetch(2)])
.then(function (first, second) {
  console.log(first, second);
});
```

## Tâche

Écrivons cette fonction !

Créez une fonction `all` qui prend deux promesses en arguments.  Cette
fonction `all` devrait fonctionner comme suit :

  - Créer une promesse interne comme bon vous semble
  - Créer une variable `counter` initialisée à zéro
  - Attacher des gestionnaires d’accomplissement au deux promesses, et
     incrémenter le compteur interne au sein de ces gestionnaires
  - Quand le compteur atteint 2, accomplir la promesse interne avec un
     tableau des **deux** valeurs accomplies
  - Pour finir, renvoyer la promesse interne

Quand vous aurez fini d’écrire `all`, passez-lui `getPromise1()` et
`getPromise2()`, et attachez un `console.log` comme gestionnaire
d’accomplissement à la promesse renvoyée.  Les deux fonctions
mentionnées seront mises à votre disposition dans la portée globale.

## Conseils

Vous souhaiterez sans doute utiliser le bon vieux constructeur `Promise` ici.
Si vous trouvez une autre façon, n’hésitez pas à [nous le signaler](https://github.com/stevekane/promise-it-wont-hurt/issues) ;
je serais curieux de voir vos solutions !

Même si cette leçon est un bon exercice pratique, dans la vraie vie vous
utiliserez plutôt `Promise.all`, dont nous réimplémentons ici une version
réduire.  `Promise.all` prend un itérable (par exemple un tableau) de
promesses en argument unique, plutôt que des arguments distincts.  Par
ailleurs, elle gère les erreurs et transmet toute erreur interne en rejet
de la promesse renvoyée.

```js
Promise.all([getPromise1(), getPromise2()])
  .then(onFulfilled, onRejected);
```

Dans cette leçon toutefois, nous avons pris soin de désactiver cette
méthode utilitaire 😈
