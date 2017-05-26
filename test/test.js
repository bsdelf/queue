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

        it('should push', () => {
            for (let i = 0; i < LENGTH; ++i) {
                queue.push(i);
                assert.equal(i + 1, queue.length);
            }
        });

        it('should shift', () => {
            for (let i = 0; i < LENGTH; ++i) {
                let data = queue.shift();
                assert.equal(i, data);
                assert.equal(LENGTH - i - 1, queue.length);
            }
        });
    });

    describe('#unshift()', () => {
        let queue = new Queue();

        it('should unshift', () => {
            for (let i = 0; i < LENGTH; ++i) {
                queue.unshift(i);
                assert.equal(i + 1, queue.length);
            }
        });

        it('should shift', () => {
            for (let i = 0; i < LENGTH; ++i) {
                let data = queue.shift();
                assert.equal(LENGTH - i - 1, data);
                assert.equal(LENGTH - i - 1, queue.length);
            }
        });
    });
});
