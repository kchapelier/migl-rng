"use strict";

var seedRandom = require('seedrandom'),
    Noise = require('noisejs').Noise;

var castToIntArbitrarily = function castToIntArbitrarily (string, max) {
    var result = 0,
        i = string.length;

    max = max || 1000000;

    while (i) {
        result += (string.charCodeAt(--i) % 91) * Math.pow(91, i);
    }

    return result % max;
};

var createRNG = function createRNG (seed, seedSource) {
    var rng = seedRandom(seed, {
            entropy: false
        }),
        noise = new Noise(seed);

    return {
        seedSource: seedSource,
        seed: seed,
        random: rng,
        randomBounded: function (min, max) {
            return min + rng() * (max - min);
        },
        perlin2: function (x, y) {
            return noise.perlin2(x, y);
        },
        perlin3: function (x, y, z) {
            return noise.perlin3(x, y, z);
        },
        simplex2: function (x, y) {
            return noise.simplex2(x, y);
        },
        simplex3: function (x, y, z) {
            return noise.simplex3(x, y, z);
        }
    };
};

module.exports = {
    create: function (seedSource, hashFunction) {
        var seed;

        if (typeof seedSource === 'string') {
            hashFunction = hashFunction || castToIntArbitrarily;
            seed = hashFunction(seedSource);
        } else {
            seed = seedSource;
        }

        return createRNG(seed, seedSource);
    }
};
