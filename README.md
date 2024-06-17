# Technical Lesson - Common Array Methods for Problem Solving

## Introduction

In this code along we will briefly examine the runtime of the following array methods: `pop`, `push`, `shift`, `unshift`, `slice`, `splice`.  We will use JavaScript's `console.time()` and `console.timeEnd()` methods to set up a timer for our methods.  Note that there will be no tests for this lesson and that results may vary from machine to machine.

## Tools and Resources

[Setting timers in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/console/time_static)
[Array Methods in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Setup

Fork this repo and clone it onto your computer.

Run `npm install`.

In order to examine our results we will be running `node src/index.js` from the root of the folder.

## Instructions

Start off by creating an array with the numbers 1-1,000,000 to work with using `let` (we need something sufficiently large to simulate the worst case run time):

```js
let arr = []
for(let i = 1; i <= 1000000; i++){
    arr.push(i)
}
```

Next we will use `console.time` and `console.timeEnd` to create our timers.  The following is an example for `shift`:

```js
console.time('start shift');
// the string for 'start shift' has to be exactly the same for both lines of code
console.timeEnd('start shift');
```

In between these two lines of code we will call the `shift` method.

```js
console.time('start shift');

// note we don't need to do anything with the value returned by .shift()
arr.shift();

console.timeEnd('start shift');
```

Now we can run our file in terminal using `node src/index.js` and get some output.  An example of output you may see is:

`start shift: 0.029ms`

Now we will do the same thing again and again for all the methods in order to show that some methods are indeed slower than others (more specifically to prove `O(n)` methods are slower than `O(1)` methods).

Keep in mind that your values have to be large enough in order to get a good picture of the execution time.  For example `arr.slice(200, 700)` won't take a lot of time since it's a relatively short slice of the array however `arr.slice(200, 300000)` will be significantly longer.

Here is an example of output for `shift`, `unshift`, `pop`, `push`, `slice`, and `splice`.  

```
shift O(n): 1.222ms
unshift O(n): 0.297ms
pop O(1): 0.003ms
push O(1): 0.001ms
slice O(n): 1.565ms
splice O(n): 3.964ms
```

You can do this for any block of code.  The solution code includes additional array methods such as the iterators `.find`, `.map` and `.forEach`.

## Solution

```js
//array to work with
let arr = [];
for (let i = 1; i <= 1000000; i++) {
	arr.push(i);
}
//.shift: O(n)
console.time("shift O(n)");
arr.shift();
console.timeEnd("shift O(n)");

//.unshift: O(n)
console.time("unshift O(n)");
arr.unshift(1);
console.timeEnd("unshift O(n)");

//.pop: O(1)
console.time("pop O(1)");
arr.pop();
console.timeEnd("pop O(1)");

//.push: O(1)
console.time("push O(1)");
arr.push(11);
console.timeEnd("push O(1)");

//.slice: O(n)
console.time("slice O(n)");
arr.slice(200, 300000);
console.timeEnd("slice O(n)");

//.splice: O(n)
console.time("splice O(n)");
arr.splice(300000, 700);
console.timeEnd("splice O(n)");

//.forEach: O(n)
console.time("forEach O(n)");
arr.forEach((el) => {
	//this is just an arbitrary operation to prove our time complexity
	let num = 300 + el;
});
console.timeEnd("forEach O(n)");

//.map: O(n)
console.time("map O(n)");
arr.map((el) => {
	//this is just an arbitrary operation to prove our time complexity
	return 300 + el;
});
console.timeEnd("map O(n)");

//.filter: O(n)
console.time("filter O(n)");
arr.filter((el) => {
	//this is just an arbitrary operation to prove our time complexity
	return el < 500000;
});
console.timeEnd("filter O(n)");

//.sort: O(n log n)
console.time("sort O(n log n)");
arr.sort()
console.timeEnd("sort O(n log n)");

//.indexOf: O(n)
console.time("indexOf O(n)");
arr.indexOf(400000)
console.timeEnd("indexOf O(n)");
```

An example output of the above code is:
```
shift O(n): 0.228ms
unshift O(n): 0.286ms
pop O(1): 0.003ms
push O(1): 0.001ms
slice O(n): 1.485ms
splice O(n): 0.475ms
forEach O(n): 6.04ms
map O(n): 8.265ms
filter O(n): 9.489ms
sort O(n log n): 20.688ms
indexOf O(n): 0.185ms
```

Notice how fast `pop` and `push` are compared to the other methods!  Regardless of how long the array is `pop` and `push`'s runtime will remain roughly the same.  In other words their runtime is constant: `O(1)`.