## Queue

### Properties

#### `length`

Reflects the number of elements in an Queue.

### Methods

#### `Queue.prototype.push()`

Adds one element to the end of an queue.

#### `Queue.prototype.shift()`

Removes the first element from an queue and returns that element.

## Benchmark

### MCU

- RTOS: nuttx
- Engine: jerryscript
- Hardware: tm4c1294

```javascript
var Queue = require('queue');

$.ready(function(error) {
    if (error) {
        console.log('error', error);
        return;
    }

    var n = 999;
    var useArray = false;

    var lst = useArray ? [] : new Queue();
    benchmark(lst);

    function benchmark(lst) {
        var tic = process.hrtime();
        ruff.printHeapStats();
        for (var i = 0; i < n; ++i) {
            lst.push(i);
        }
        ruff.printHeapStats();
        for (var i = 0; i < n; ++i) {
            lst.shift();
        }
        console.log(process.hrtime(tic));
    }
});
```

Array:

```
ruffos is started.
loading...
Heap stats:
  Heap size = 153592 bytes
  Allocated = 71768 bytes
  Waste = 933 bytes
  Peak allocated = 71992 bytes
  Peak waste = 937 bytes
  Skip-ahead ratio = 4.9032
  Average alloc iteration = 2.0786
  Average free iteration = 4.4991

Heap stats:
  Heap size = 153592 bytes
  Allocated = 84144 bytes
  Waste = 933 bytes
  Peak allocated = 84144 bytes
  Peak waste = 937 bytes
  Skip-ahead ratio = 4.8940
  Average alloc iteration = 2.2903
  Average free iteration = 4.4947

6,550000000
```

Queue:

```
ruffos is started.
loading...
Heap stats:
  Heap size = 153592 bytes
  Allocated = 71792 bytes
  Waste = 933 bytes
  Peak allocated = 71992 bytes
  Peak waste = 937 bytes
  Skip-ahead ratio = 4.9032
  Average alloc iteration = 2.0786
  Average free iteration = 4.4991

Heap stats:
  Heap size = 153592 bytes
  Allocated = 92792 bytes
  Waste = 922 bytes
  Peak allocated = 92792 bytes
  Peak waste = 937 bytes
  Skip-ahead ratio = 4.8881
  Average alloc iteration = 1.9140
  Average free iteration = 4.6046

0,410000000
```
