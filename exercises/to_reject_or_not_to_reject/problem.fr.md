# Que se passe-t-il si on rejette ET on accomplit une promesse ?

La spécification **ES2015** stipule qu’une promesse, une fois accomplie
ou rejetée, ne **peut pas** changer d’état pour le restant de sa vie.  C’est
un aspect critique des promesses et c’est aussi une des différences-clés avec
un `EventEmitter` (ou toute autre forme de fonctions de rappel qui peuvent
être répétées).

Le code à base de fonctions de rappel requiert généralement que la fonction
de rappel en question soit appelée quelque part au sein du code auquel on la
passe.  Souvent, même si pas toujours, cette fonction n’est censée être appelée
qu’une seule fois.  Toutefois, au travers d’erreurs de logique, de soucis de
syntaxe ou d’autres bévues faciles à faire, il reste possible d’appeler la
fonction de rappel plusieurs fois, ce qui crée des états pénibles dans votre
application et engendre des bogues bien fourbes.

```js
/*
 * Le code ci-dessous est problématique, et néanmoins fréquent, et a le sale
 * effet de bord d’appeler la fonction de rappel plus d’une fois (au risque de
 * détruire la planète ?).  L’usage veut qu’on `return` sur la première invocation
 * de la fonction de rappel, mais il est facile de l’oublier !
 */

function myFunc (user, callback) {
  if (user) {
    callback(null, user);
  }
  return callback(new Error("Aucun utilisateur trouvé"), null);
}
```

## Tâche

Créons un script simple pour nous **prouver** que les promesses ne peuvent
être établies (rejetées ou accomplies) qu’une fois, et que toute tentative
ultérieure sera simplement ignorée.

Primo, créez une promesse à l’aide du constructeur `Promise`, comme nous
l’avons déjà fait.

Dans le `executor` passé au constructeur, appelez immédiatement la
fonction `fulfill` avec la valeur `"J'AI ETE APPELEE"`.

Puis juste après, dans le même code, essayez immédiatement de rejeter la
promesse en appelant `reject` avec un objet `Error` dont l’argument est
`"JE N'AI PAS ETE APPELEE"`.

Une fois la promesse créée, créez une fonction `onRejected` avec un argument
`error` dont elle affichera le message avec `console.log`.

Enfin, passez `console.log` comme gestionnaire de succès et la fonction
que nous venons de créer comme gestionnaire de rejet à la méthode `then`
de la promesse.

Si nous réussissons, votre script devrait afficher « J'AI ETE APPELEE »
mais **pas** « JE N'AI PAS ETE APPELEE ».

Remarquez que contrairement aux exercices précédents, nous n’utilisons pas
de `setTimeout` dans celui-ci.
