const { performance } = require('perf_hooks');





// Finding the nth number in the fibonacci sequence

//Recursive structure
const fib = (n) =>{
  if (n <=2) return 1;
  return fib(n-1) + fib(n-2);
};

var rec_startTime = performance.now();
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
var rec_endTime = performance.now();

var rec_tot = rec_startTime - rec_endTime;

//Time Complexity is O(2^n) which is a bottleneck for computing large n
//Implement Memoization

// will use hash map equivalent (JS object)
// keys will be argument to function and value will be return value
// so will have mapping from function call to return value

const fibo = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n<=2) return 1;
  memo[n] = fibo(n-1, memo) + fibo(n-2, memo);
  return memo[n];
};


var dyn_startTime = performance.now();
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(10));
var dyn_endTime = performance.now();

var dyn_tot = dyn_endTime - dyn_startTime;


console.log('Is the call to do Dynamic func over Recursive func quicker?' ${rec_tot > dyn_tot});
