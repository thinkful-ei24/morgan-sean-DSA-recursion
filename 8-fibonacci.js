
function fib(n) {
  if(n < 3) return 1;
  return fib(n-2) + fib(n-1);
}

console.log(fib(6)); // should print 8