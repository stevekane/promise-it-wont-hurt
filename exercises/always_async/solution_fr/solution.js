'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('VALEUR DE LA PROMESSE');
});

// À ce stade, la valeur de la promesse est déjà connue.

// Si la promesse n’est pas toujours asynchrone, `console.log`
// sera appelée avec 'VALEUR DE LA PROMESSE' ci-après.  Ce
// n’est toutefois pas le cas.

promise.then(console.log);

console.log('PROGRAMME PRINCIPAL');
