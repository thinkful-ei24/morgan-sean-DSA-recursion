// string, sep => [...substrings split by sep]

function time(fnA, iterations, args) {
  const start = Date.now();
  for(let i=0; i<iterations; i++) {
    fnA(...args);
  }
  return `${Date.now() - start} ms elapsed for ${iterations} iterations`;
}

function split(s, sep) {
  function splitHelper(s, sep, arr) {
    if (s === "") return arr;

    if (s[0] === sep) {
      if (s.length === 1) return arr;
      arr.push("");
      return splitHelper(s.slice(1), sep, arr);
    }

    arr[arr.length - 1] = arr[arr.length - 1] + s[0];
    return splitHelper(s.slice(1), sep, arr);
  }

  return splitHelper(s, sep, [""]);
}

function split_iter(s, sep) {
  const results = [''];
  let i = 0;
  for(let c of s) {
    if(c !== sep) {
      results[i] += c;
    } else {
      i++;
      results[i] = '';
    }
  }
  return results;
}

const testStr = "tomatoes are amazing a b c d e f g h i j k l m n o p";
// console.log(split(testStr, " "));
// console.log(split_iter(testStr, " "));

const timeA = time(split, 1000000, testStr, " ");
console.log(timeA);
const timeB = time(split_iter, 1000000, testStr, " ");
console.log(timeB);
