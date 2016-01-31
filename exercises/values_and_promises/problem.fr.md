# Suis-je OBLIGÉ-E de renvoyer des promesses ?

**Non !**  Les gestionnaires d’accomplissement peuvent renvoyer
des promesses **ou** des valeurs.  Toute implémentation qui respecte
la spécification ES2015 aura la bonne réaction et enrobera votre
valeur retournée dans une promesse, si besoin est.  C’est une
fonctionnalité assez géniale car elle vous permet de mélanger des
valeurs et des promesses dans la même chaîne.

Imaginez que vous avez un cache de modèles qui aurait déjà un modèle
que vous souhaitiez requêter depuis le serveur.  Vous pourriez vérifier
votre cache de façon synchrone et renvoyer le modèle ainsi trouvé
**ou** envoyer une requête AJAX au serveur distant pour le récupérer.

Cette fonctionnalité d’enrobage dans une promesse signifie que les deux
cas de figure peuvent être exploités au moyen d’une unique abstraction :

```js
doSomeSetup()
.then(function () {
  return cache.fetchModel(id) || promisedAjax("users/" + id);
})
.then(displayUser)
.then(null, handleError);
```

Le point important à comprendre est que vos gestionnaires vont **enrober**
vos valeurs de retour dans des promesses, même si vous les avez obtenues
de façon synchrone.

Un autre point critique à comprendre est que, comme nous l’avons détaillé
précédemment, la valeur de retour ne sera transmise aux fonctions de
succès qu’au **prochain** tour de la boucle d’événements.

## Tâche

1. Construisez une fonction `attachTitle` qui préfixe son premier argument
    avec le texte `"DR. "` et renvoie le résultat.
2. Construisez une promesse accomplie avec la valeur `'MANHATTAN'`.
3. Construisez une chaîne de promesses à partir de celle-ci, qui
    appellerait d’abord `attachTitle` puis `console.log`.

Si votre programme est correct, il devrait afficher « DR. MANHATTAN », ce qui
roxxe quand même des poneys magiques.
