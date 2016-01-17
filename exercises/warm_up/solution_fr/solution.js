// Émulation de `Promise` si nécessaire.  On détecte si le type
// `Promise` est disponible nativement, sinon on recourt à
// l’émulation par `es6-promise`.
var Promise = typeof Promise === 'undefined'
            ? require('es6-promise').Promise
            : Promise

// Crée la promesse
var promise = new Promise(function (fulfill, reject) {
  // Une fois atteint le timeout de 300ms, on accomplit la
  // promesse avec la valeur « RESOLU ! ».
  setTimeout(fulfill, 300, 'RESOLU !')

  // Le code ci-dessus est équivalent à celui-ci :
  //
  // ```
  // setTimeout(function () {
  //   fulfill('RESOLU !')
  // }, 300)
  // ```
})

// Ajout d’un gestionnaire pour l’accomplissement de la promesse.
// `console.log` sera appelée avec la valeur passée à `fulfill`, à
// savoir « RESOLU ! ».  Remarquez que cette instruction sera
// TOUJOURS appelée avec que `fulfill` soit appelée (nous y reviendrons
// dans les défis qui suivront).
promise.then(console.log)
