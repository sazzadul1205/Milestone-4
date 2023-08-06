let a = 5;
let b = 7;

console.log(a, b);

// wrong approach
// a = b;
// b =a;

// approach 1
// const temp = a;
// a = b;
// b = temp;

// approach 2---- destructuring
[a, b] = [b, a]



console.log(a, b);