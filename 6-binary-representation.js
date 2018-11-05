

// 5 base to binary representation (101 in binary):
// first:
// 5%2 = 1
// Math.floor(5/2) = 2
// second:
// 2%2 = 0
// Math.floor(2/2) = 1
// third
// 1%2 = 1
// Math.floor(1/2) = 0 BASE CASE

function binaryRepr(num) {
  if(num <= 0) {
    return '';
  }

  const bit = Math.floor(num%2);
  return binaryRepr(Math.floor(num/2)) + bit;
}

console.log(binaryRepr(5));
console.log(binaryRepr(18));