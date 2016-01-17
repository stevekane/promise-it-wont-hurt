# Peut-on faire ce que fait `async` ?

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

1) Construisez deux promesses ;
2) Écrivez une fonction `all` qui accepte deux promesses comme arguments ;
   Votre fonction doit :

  a) Créer une promesse interne et la renvoyer !
  b) Créer une variable `counter` initialisée à `0`.
  c) Attacher des gestionnaires de succès `then` pour chaque promesse transmise,
     et y incrémenter le compteur interne ;
  d) **Seulement** quand le compteur atteint 2, accomplir la promesse interne
     avec comme valeur un tableau des deux valeurs obtenues par les promesses
     passées.
  e) **Mais aussi** attacher des gestionnaires de rejet à chaque promesse passée,
     qui rejettent la promesse interne !

3) Passez vos deux promesses à votre fonction, et attachez un `console.log`
   comme gestionnaire d’accomplissement pour la promesse que votre fonction
   aura retournée.
4) Dans un `setTimeout` avec un délai de 200ms, accomplissez la première promesse
   avec la valeur « LES PROMESSES » et la deuxième avec la valeur « ROXXENT ».

Si votre code est correct, il devrait afficher `["LES PROMESSES", "ROXXENT"]`,
ce qui après tout n’est qu’une opinion parmi d’autres, hein…

## Bonus

Essayez d’utiliser la méthode `Promise.all()` pour remplacer votre fonction.
