# Promise me... quicker

La especificación ES2015 define algunos atajos de teclado que permiten crear y trabajar con
promesas más rápido y fácilmente. 

El primero es `.catch`. Hasta ahora nosotros sabemos como manejar el rechazo de una
promesa -- a través del segundo parametro `.then`. Sin embargo,
algunas veces tu solo puedes manejar rechazos y no sucesos. En estos
casos, el `onFulfilled` callback es opcional, tu puedes especificar `null` en su lugar.
Sin embargo, una manera más fácil de logar esto es usar `.catch`. En lugar de tener
que escribir

```js
promise.then(null, function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

Se puede simplemente escribir

```js
promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

Esta notación también tiene el beneficio de hacer la sintaxis más fácil de entender para
gente que no habla de Promesas todavía, pero es obvio que cualquier
programador de java entiende que significa `catch`.

El segundo y tercer son `Promise.resolve` y `Promise.reject`. El codigo
del siguiente ejemplo explica como se hace.

```js
// The way you have learned: create promise through the constructor.

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise = Promise.resolve('SECRET VALUE');


// Likewise...

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));
```

## Tarea

Nosotros no tenemos ninguna específica tarea para asignarte en esta lección.
Sientete libre para explorar las tres funciones a tu propio ritmo. Cuando tu estes
preparado para presentarlo, utiliza al menos `catch` y un
 `Promise.resolve` y `Promise.reject` ☺
