const { performance } = require('perf_hooks');



/*Binary Exponentiation or Exponentiation by Squaring

For positive integer n,

x^n = { x*( x^{(n-1)/2} )^2 }, if n is odd,
         (x^{n/2})^2,      if n is even.}

It reduces runtime from O(n) to O(log n) as computing something like
x^{13} will be 13 operations of multiplying x with itself.
But as 13 = 1101 in binary, these 13 operations get reduced to just 4.
Which is approximately equal to log_2(13).
*/

//First approach: recursive approach

var rec_startTime = performance.now();


const rec_power = (a,b) =>{
  var res = 1;
  if (b === 0) return 1;
  var tmp = rec_power(a, parseInt(b/2));
  res = tmp*tmp;
  if (b%2 === 1) {
    res *= a; //i.e. res = (x^{(n-1)/2})^2  and a = x)
  }
  return res;
};

console.log('3^11 is ' + rec_power(3,11));
console.log('3^3 is ' + rec_power(3,3));
console.log('3^2 is ' + rec_power(3,2));
console.log('3^1 is ' + rec_power(3,1));
console.log('3^4 is ' + rec_power(3,4));




var rec_endTime = performance.now();

var rec_tot = rec_endTime - rec_startTime;
console.log('Runtime is: ' + rec_tot);


//Second approach: iterative approach (Exponentiation by squaring)

var iter_startTime = performance.now()

const iter_power = (a,b) =>{
  let res = 1;
  while (b>0){
    if (b%2 == 1) res *= a;
    a *= a;
    b = parseInt(b/2);
  }
  return res;
};

console.log('3^11 is ' + iter_power(3,11));
console.log('3^2 is ' + iter_power(3,2));
console.log('3^3 is ' + iter_power(3,3));

var iter_endTime = performance.now();
var iter_tot = iter_endTime - iter_startTime;

console.log('Runtime is: ' + iter_tot);

var res = iter_tot < rec_tot;

console.log('Is iterative approach quicker than Recursive?: ' + res);
console.log('Approaches differ by: ' + (rec_tot - iter_tot) + ' milliseconds.');


// Modifying above code to computer (a^b)%M

const iter_power_modulo = (a,b, M) =>{
  let res = 1;
  while (b>0){
    if (b%2 == 1) res = (res*a)%M;
    a = (a*a)%M;
    b = parseInt(b/2);
  }
  return res;
};

console.log(iter_power_modulo(3,11,5));

// Fermat's litter theorem: a^{p-1} = 1 (mod p), where p is prime.
//Note a^{p-1} = 1 (mod p) is equivalent to a^p = a (mod p).
//a^{p-1} = 1 (mod p) also implies that a^{p-2} = 1/a (a^{-1}) (mod p)

const inverse = (a, p) =>{
  return iter_power(a, p-2) //returns modulo inverse
};


console.log(inverse(3,10));
//This has complexity O(log p).
//
