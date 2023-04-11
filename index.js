const benchmarking = require('./benchmarking');

Object.values(benchmarking)
    .filter(fn => typeof fn === 'function')
    .forEach(fn => wrapped(fn)());

function wrapped(fn) {
    return function () {
        const start = Date.now();
        fn();
        const finish = Date.now();
        console.log(fn.name, (finish - start) / 1000, 'seconds.');
    };
};
