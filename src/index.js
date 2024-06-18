//Follow along here

//array to work with
let arr = [];
for (let i = 1; i <= 8000000; i++) {
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

//.indexOf: O(n)
console.time("indexOf O(n)");
arr.indexOf(400000)
console.timeEnd("indexOf O(n)");
