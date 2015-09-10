# Si on faisait un truc qui ressemble à, tu sais, la « vraie vie »…

## Allez on va choper du JSON via HTTP…  OUAIS !

Récupérer des données JSON depuis des machines distantes via AJAX,
c’est très courant, aussi bien côté serveur que côté client.  Les promesses
s’appliquent particulièrement bien à AJAX.  Une requête AJAX peut réussir ou
échouer, mais jamais les deux.  Les promesses peuvent s’accomplir ou rejeter,
mais jamais les deux.

Waouh.  Si proches.  Très prometteur…

## Tâche

Récupérez du JSON depuis `http://localhost:1337/` et passez-le à `console.log`.

Il y a deux petites choses que vous devez savoir :

1. Le module `http` de `q-io` a une méthode `read()` qui renvoie une promesse
    pour le corps de réponse d’une requête HTTP réussie (code 200).
2. Parsez le JSON récupéré et affichez-le via `console.log` pour déchirer.

Ce défi peut sembler avancé, mais l’implémentation est plutôt simple.
