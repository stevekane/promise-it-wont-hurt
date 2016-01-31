# Rejeter une promesse

Après la leçon précédente, vous voilà capable de créer une promesse, de
l’accomplir avec une valeur, et de lire cette valeur après l’accomplissement
de la promesse.  Ceci étant, toutes les promesses n’aboutissent pas avec
succès ; des erreurs peuvent survenir lors du traitement.  C’est là que le
rejet de promesses intervient.

Lorsqu’une promesse est rejetée, cela indique généralement (mais pas toujours)
qu’une valeur n’a pas pu être obtenue par la promesse.  Les promesses fournissent
un moyen de transmettre l’erreur précise qui a empêché l’accomplissement.

Une fois qu’une promesse a été rejetée, elle ne peut plus jamais être résolue
(ou rejetée à nouveau).  Cet aspect des promesses sera vu plus en détail dans
la prochaine leçon.

## Tâche

Créez une promesse qui, après un délai de 300 ms, rejette avec un objet `Error`.
L’objet `Error` sera construit avec comme argument `'REJET !'`, qui sera le
texte de son message.

Créez une fonction `onReject` qui affichera `error.message` à l’aide de
`console.log`.  Passez-la comme gestionnaire de rejet à la méthode `then` de
votre promesse.

## Conseil

Pour rappel de la leçon précédente, la méthode `then` d’une promesse prend
deux fonctions de rappel optionnelles : la première est appelée quand la
promesse s’accomplit, la seconde quand elle rejette.

## Base de travail

```js
var promise = new Promise(function (fulfill, reject) {
  // Votre solution ici
});

function onReject (error) {
  // Votre solution ici
}

// Votre solution ici
```
