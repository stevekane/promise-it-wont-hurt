# Les promesses sont-elles toujours résolues en asynchrone ?

La spécification ES2015 stipule que les promesses **ne doivent pas**
déclencher leur fonction d’accomplissement / de rejet dans le même tour
de la boucle événementielle que celui qui les a créées.  C’est extrêmement
important car ça élimine le risque que l’ordre d’exécution varie, ce qui
pourrait donner des résultats indéterminés.

Vous pouvez vous attendre à ce que les fonctions passées au `then` des
promesses soient toujours appelées, au plus tôt, au **prochain** tour de
la boucle d’événements.

## Tâche

Dans cette leçon, nous allons nous prouver que les promesses sont toujours
asynchrones.

Primo, créez une promesse avec le constructeur `Promise`.

Dans le `executor` passé au constructeur, accomplissez immédiatement la
promesse avec la valeur `'VALEUR DE LA PROMESSE'`.

Une fois la promesse créée, passez `console.log` comme gestionnaire de succès
à la méthode `then`.

Pour finir, affichez `'PROGRAMME PRINCIPAL'` avec `console.log`.

## Conseils

Si l’exécution de la promesse est synchrone, la valeur de la promesse est
déjà connue après sa construction.  L’appel `console.log` passé au `then`
serait donc exécuté immédiatement.

À l’inverse, si notre script est bon, on verra « PROGRAMME PRINCIPAL »
avant « VALEUR DE LA PROMESSE ».

Cela montre qu’en dépit d’un établissement synchrone de la promesse,
les gestionnaires passés à `then` ne seront exécutés qu'au prochain
tour de boucle.
