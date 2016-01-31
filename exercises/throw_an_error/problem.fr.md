# Que se passe-t-il quand une erreur est levée ?

Une des plus grandes forces des promesses, c’est leur façon de gérer les
erreurs, qui est similaire à celle du code synchrone.  Contrairement au code
traditionnel basé sur les fonctions de rappel, vous n’avez pas besoin de gérer
attentivement les erreurs à chaque étape d’appel.

Si une erreur est levée au sein d’une fonction, elle peut être capturée.

Si une erreur est levée au sein d’une fonction, elle sera traitée par le prochain
gestionnaire de *rejet* disponible.  Cela vous permet d’écrire du code qui
ressemble beaucoup à un bloc `try`/`catch` classique dans du code synchrone.

```js
try {
  doSomethingRisky();
  doAnotherRiskyThing();
} catch (e) {
  console.log(e);
}
```

Le code « promisifiée » équivalent pourrait ressembler à ceci :

```js
doSomethingRisky()
.then(doAnotherRiskyThing)
.then(null, console.log);
```

## Tâche

Allez, on se fait exactement ce dont on vient de parler.

On va vous transmettre du JSON invalide dans `process.argv[2]`.

1. Écrivez une fonction appelée `parsePromised` qui crée une promesse,
    fait un `JSON.parse` là-dessus au sein d’un bloc `try`/`catch`, et
    accomplit ou rejette la promesse selon qu’il y a une erreur levée ou non.
    **Note :** votre fonction devrait renvoyer la promesse de façon synchrone !
2. Construisez une séquence d’étapes comme celle ci-dessus, qui capture toute
    erreur levée et la logue dans la console.
