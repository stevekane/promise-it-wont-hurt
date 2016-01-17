# Les promesses sont-elles toujours résolues en asynchrone ?

La spécification Promises/A+ stipule que les promesses **ne doivent pas**
déclencher leur fonction d’accomplissement / de rejet dans le même tour
de la boucle événementielle que celui qui les a créées.  C’est extrêmement
important car ça élimine le risque que l’ordre d’exécution varie, ce qui
pourrait donner des résultats indéterminés.

Vous pouvez vous attendre à ce que les fonctions passées au `then` des
promesses soient toujours appelées, au plus tôt, au **prochain** tour de
la boucle d’événements.

## Tâche

Dans cette leçon, nous allons nous prouver qu’il en est bien ainsi en
écrivant un script qui suit le scénario que voici :

1. Créez une promesse
2. Passez `console.log` à la méthode `then` de notre promesse
3. Accomplissez la promesse avec le paramètre `"SECOND"`
4. Écrivez `"PREMIER"` sur la console à l’aide de `console.log`

Faites ça de façon synchrone, et **non pas** dans un `setTimeout`, comme
ça avait pu être le cas dans les leçons précédentes.

Votre script devrait fonctionner et vous prouver que, malgré l’accomplissement
synchrone de la promesse, la fonction de succès ne sera exécutée qu’au prochain
tour de la boucle d’événements.

Ainsi, vous devriez voir "PREMIER", puis "SECOND".
