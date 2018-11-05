// n => `n - Another sheep jump over the fence`
// Base case: no sheep left

// 5 => 4 => 3 => 2 => 1 => STOP

function countSheep(n) {
  if (n <= 0) return;
  console.log(`${n} - Another sheep jump over the fence`);
  return countSheep(n - 1);
}

countSheep(2);
// countSheep(5);
// countSheep(0);
