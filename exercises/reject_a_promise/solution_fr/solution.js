'use strict';

// Crée la promesse
var promise = new Promise(function (fulfill, reject) {
  // Une fois atteint le timeout de 300ms, on rejette la
  // promesse avec un objet `Error` dont le message est « REJET ! ».
  setTimeout(reject, 300, new Error('REJET !'))
})

// Crée la fonction qui affichera `error.message` à l’aide
// de `console.log`.

function onReject (error) {
  console.log(error.message);
}

// Passe cette fonction comme gestionnaire de rejet à la méthode
// `then` de la promesse (le 2e argument).

promise.then(null, onReject);
