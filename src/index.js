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
    if (this.tail) {
        this.tail.next = node;
        this.tail = node;
        ++this.length;
    } else {
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
};

Queue.prototype.shift = function () {
    var data = null;
    if (this.head) {
        data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        --this.length;
    }
    return data;
};
