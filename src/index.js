'use strict';

function Queue() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

Queue.prototype.push = function (data) {
    var node = {
        data: data,
        next: null
    };
    if (this.head) {
        this.tail.next = node;
    } else {
        this.head = node;
    }
    this.tail = node;
    this.length += 1;
};

Queue.prototype.shift = function () {
    var data = null;
    if (this.head) {
        data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.length -= 1;
    }
    return data;
};

Queue.prototype.unshift = function (data) {
    var node = {
        data: data,
        next: this.head
    };
    this.head = node;
    if (!this.tail) {
        this.tail = node;
    }
    this.length += 1;
};

Queue.prototype.forEach = function (callback) {
    for (var node = this.head; node; node = node.next) {
        callback(node.data);
    }
};

Queue.prototype.some = function (callback) {
    for (var node = this.head; node; node = node.next) {
        if (callback(node.data)) {
            return true;
        }
    }
    return false;
};

Queue.prototype.every = function (callback) {
    for (var node = this.head; node; node = node.next) {
        if (!callback(node.data)) {
            return false;
        }
    }
    return true;
};

Queue.prototype.reduce = function (callback, acc) {
    for (var node = this.head; node; node = node.next) {
        acc = callback(acc, node.data);
    }
    return acc;
};

module.exports = Queue;
