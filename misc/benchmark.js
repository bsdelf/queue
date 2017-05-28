var Queue = require('../src/index.js');

var n = 99999;

console.log('=== Array ===');
benchmark([]);

console.log('=== Queue ===');
benchmark(new Queue());

function benchmark(lst) {
    run('push', function (i) {
        lst.push(i);
    }, n);

    run('shift', function () {
        lst.shift();
    }, n);

    run('unshift', function (i) {
        lst.unshift(i);
    }, n);

    run('forEach', function () {
        lst.forEach(function (val) {});
    }, 1);

    run('reduce', function () {
        lst.reduce(function (acc, val) { return acc + val; }, 0);
    }, 1);
}

function run(name, func, n) {
    var tic = process.hrtime();
    for (var i = 0; i < n; ++i) {
        func(i);
    }
    var toc = process.hrtime(tic);
    var ms = (toc[0] * 1e3 + toc[1] / 1e6) / n;
    var padding = Array(Math.max(10 - name.length, 0) + 1).join(' ');
    console.log(name + padding, ms.toFixed(4), 'ms');
}
