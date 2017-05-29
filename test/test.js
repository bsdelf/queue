'use strict';

const assert = require('chai').assert;
const Queue = require('../src/index.js');

const LENGTH = 100;

describe('Queue', () => {

    describe('#shift()', () => {
        let queue = new Queue();
        it('should not shift if queue is empty', () => {
            let data;
            assert.doesNotThrow(() => {
                data = queue.shift();
            });
            assert.equal(0, queue.length);
            assert.equal(null, data);
        });
    });

    describe('#push()', () => {
        let queue = new Queue();

        it('should push elements', () => {
            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }
        });

        it('should shift elements', () => {
            for (let i = 0; i < LENGTH; ++i) {
                let data = queue.shift();
                assert.equal(i, data);
                assert.equal(LENGTH - i - 1, queue.length);
            }
        });
    });

    describe('#unshift()', () => {
        let queue = new Queue();

        it('should unshift elements', () => {
            for (let i = 0; i < LENGTH; ++i) {
                queue.unshift(i);
                assert.equal(i + 1, queue.length);
            }
        });

        it('should shift elements', () => {
            for (let i = 0; i < LENGTH; ++i) {
                let data = queue.shift();
                assert.equal(LENGTH - i - 1, data);
                assert.equal(LENGTH - i - 1, queue.length);
            }
        });
    });

    describe('#forEach()', () => {
        let queue = new Queue();

        it('should visit each element', () => {
            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            let i = 0;
            queue.forEach(data => {
                assert.equal(i++, data);
            });
            assert.equal(i, queue.length);
        });
    });

    describe('#some()', () => {
        it('should be true for some elements', () => {
            let queue = new Queue();

            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            for (let i = 0; i < LENGTH; ++i) {
                assert.equal(true, queue.some(data => data === i));
            }
        });

        it('should be false for all elements', () => {
            let queue = new Queue();

            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            for (let i = 0; i < LENGTH; ++i) {
                assert.equal(false, queue.some(data => data === -1));
            }
        });
    });

    describe('#every()', () => {
        it('should be true for all elements', () => {
            let queue = new Queue();

            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            assert.equal(true, queue.every(data => (data >= 0) && (data < LENGTH)));
        });

        it('should be false for all elements', () => {
            let queue = new Queue();

            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            assert.equal(false, queue.every(data => data === -1));
        });
    });

    describe('#reduce()', () => {
        it('should reduce to sum', () => {
            let queue = new Queue();

            let sum = 0;
            for (let i = 0; i < LENGTH; ++i) {
                sum += i;
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }

            assert.equal(sum, queue.reduce((acc, val) => acc + val, 0));
        });
    });
});
