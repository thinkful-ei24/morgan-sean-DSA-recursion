
function fib(n) {
  const table = [0, 1, 1];
  
  fib_memo(n);
  function fib_memo(n) {
    if(n < 3) return;
  
    if(!table[n-2]) {
      fib_memo(n-2);
    }
    if(!table[n-1]) {
      fib_memo(n-1);
    }
    table[n] = table[n-2] + table[n-1];
  }
  return table.join(' ');
}

console.log(fib(6)); // should print 8