# Faisons plusieurs opérations avec des machines « distantes »

Envoyer et récupérer des données entre ordinateurs / processus autres que
votre application est un besoin de plus en plus courant dans les mondes de
Node.js et du navigateur.  Il arrive souvent que vous ayiez besoin de
récupérer des données depuis de multiples sources, effectuer des opérations
sur celles-ci, et émettre des données en retour.

## Tâche

Allons discuter avec deux processus distants via HTTP ; ils tourneront
sur notre ami commun : `localhost`.

* Port 7000 : Pseudo cache de session (à la Redis)
* Port 7001 : Pseudo base de données (à la MongoDB, LevelDB, Postgres…)

Comme dans la leçon précédente, nous utiliserons le module `q-io` pour
créer des promesses enrobant les réponses HTTP.  **Astuce :** vous aurez
sans doute besoin de plus d’une promesse…

1. Envoyez une requête HTTP GET au cache de session sur le port 7000.
    Vous récupérerez une chaîne de caractère représentant un ID utilisateur.
2. Utilisez cet ID pour une autre requête HTTP GET à la base de données sur
    le port 7001, avec comme URL `localhost:7001/<id>` (sans les chevrons).
3. Si ça fonctionne, votre base de données vous renverra un objet utilisateur.
   Affichez-le avec `console.log` pour gagner des points de geekitude.
