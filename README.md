# migl-rng

Micro Game Library : Random number generator (using seedrandom and noisejs)

## Features

 * Create a random number generator based on a string
 * Use seedrandom and noisejs

## Basic example

```js
var rng = require('migl-rng');

var r = rng.create('Test');

console.log(r.random());
console.log(r.randomBounded(50, 100)); // random bewteen 50 and 100 included
console.log(r.perlin2(1.1, 5.1));
console.log(r.perlin3(1.1, 5.1, 4));
console.log(r.simplex2(1.1, 5.1));
console.log(r.simplex3(1.1, 5.1, 4));
```

It is also possible to use a custom hashing function :

```js
var rng = require('migl-rng'),
    stringHash = require('string-hash');

var r = rng.create('Test', stringHash);
```

Or to directly set the seed :

```js
var rng = require('migl-rng');

var r = rng.create(12943);
```
