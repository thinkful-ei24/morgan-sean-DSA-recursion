// potato
// p === o => return false

// racecar
// r === r =>
// a === a =>
// c === c =>
// e => true
// if length === 1 return true

function isAnagram(s) {
  if (s.length < 2) return true;

  if (s[0] === s[s.length - 1]) {
    return isAnagram(s.slice(1, s.length - 1));
  } else return false;
}

console.log(isAnagram("potato"));
console.log(isAnagram("racecar"));
