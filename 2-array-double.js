
const arrayA = [1, 2, 3];
const arrayB = [-5, 0, 7, 9, 22];

// base case: empty array
// multiply first element in the array by 2 and concat with a copied array = arr - first element

function arrayDouble(arr) {
  if(arr.length === 0) {
    return [];
  }

  return [2*arr[0]].concat(arrayDouble(arr.slice(1)));
}

console.log(arrayDouble(arrayA));
console.log(arrayDouble(arrayB));
