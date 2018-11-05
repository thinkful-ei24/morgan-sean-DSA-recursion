

function nthTriangular(n) {
  if(n === 1) return 1;

  return nthTriangular(n-1) + n;
}

console.log(nthTriangular(2));
console.log(nthTriangular(4));
console.log(nthTriangular(9));