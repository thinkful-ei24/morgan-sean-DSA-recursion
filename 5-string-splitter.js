// string, sep => [...substrings split by sep]

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

console.log(split("tomatoes are amazing", " "));
