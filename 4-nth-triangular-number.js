function nthTriangular(n) {
  this.cache = this.cache || [0, 1];
  function populateCache(n) {
    if (n === 1) return;
    if (this.cache[n - 1] === undefined) {
      populateCache(n - 1);
    }
    this.cache[n] = this.cache[n - 1] + n;
    console.log(this.cache);
  }
  populateCache(n);
  return this.cache[n];
}

console.log(nthTriangular(2));
console.log(nthTriangular(4));
console.log(nthTriangular(9));
