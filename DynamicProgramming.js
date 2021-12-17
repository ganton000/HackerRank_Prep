const { performance } = require('perf_hooks');





// Finding the nth number in the fibonacci sequence

//Recursive structure
console.log('Fibonacci Problem');
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
console.log(fib(20));
var rec_endTime = performance.now();

var rec_tot = rec_endTime - rec_startTime;
console.log('Runtime is: ' + rec_tot);

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


//Output for below code should be 8, 13, 21, 34, 55, 6765
var dyn_startTime = performance.now();
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(10));
console.log(fibo(20));
var dyn_endTime = performance.now();

var dyn_tot = dyn_endTime - dyn_startTime;
console.log('Runtime is: ' + dyn_tot);

var res = rec_tot > dyn_tot

console.log('Is the call to do Dynamic func over Recursive func quicker? ' + res);

console.log('The 50th fibonacci number is: ' + fibo(50)); //Output should be 12586269025

/*
gridTraveler
You are a traveler on a 2D grid. You begin in the top-left corner and
your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m \times n?
*/

console.log('The gridTraveler problem');

const gridTraveler = (m,n, memo={}) =>{
  const key = m + ',' + n;

  if (key in memo) return memo[key];
  if (n == 1 && m==1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
  return memo[key];

};

start = performance.now();
console.log(gridTraveler(1,1)); //1
console.log(gridTraveler(2,3)); //3
console.log(gridTraveler(3,2)); //3
console.log(gridTraveler(3,3)); //6
console.log(gridTraveler(18,18)); // 2333606220
console.log(gridTraveler(97,100)); //2800552866375665852436103479490078532200005483800695633500
console.log(gridTraveler(1,100)); //1
var time_tot = performance.now() - start;

console.log('Runtime is: ' + time_tot);



/*




*/
