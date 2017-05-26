## Queue

### Properties

#### `length`

Reflects the number of elements in an queue.

### Methods

#### `Queue.prototype.push()`

Adds one element to the end of an queue.

#### `Queue.prototype.shift()`

Removes the first element from an queue and returns that element.

#### `Queue.prototype.unshift()`
Adds one element to the beginning of an queue.

## Benchmark

### 1

- Engine: JerryScript
- OS: Nuttx
- Chip: TM4C1294XL

```
n = 999

=== Array ===
push       0.1702 ms
shift      6.4064 ms
unshift    10.5706 ms
forEach    10.0000 ms
reduce     20.0000 ms
=== Queue ===
push       0.3003 ms
shift      0.1101 ms
unshift    0.2202 ms
forEach    40.0000 ms
reduce     50.0000 ms
```

### 2

- Engine: Duktape
- OS: Linux OpenWrt
- Chip: RT5350

```
n = 999

=== Array ===
push       0.1564 ms
shift      8.9179 ms
unshift    8.2873 ms
forEach    88.2040 ms
reduce     124.3657 ms
=== Queue ===
push       0.2027 ms
shift      0.1657 ms
unshift    0.1882 ms
forEach    20.7009 ms
reduce     28.4813 ms
```


### 3

- Engine: V8
- OS: macOS
- Chip: Intel Core i7 @2.5 GHz

```
n = 99999

=== Array ===
push       0.0000 ms
shift      0.0443 ms
unshift    0.0334 ms
forEach    2.5391 ms
reduce     3.6508 ms
=== Queue ===
push       0.0001 ms
shift      0.0000 ms
unshift    0.0001 ms
forEach    0.8376 ms
reduce     16.5405 ms
```
