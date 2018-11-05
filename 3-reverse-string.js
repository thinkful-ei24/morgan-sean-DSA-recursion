// hello => olleh

// hello -> o => hell -> l =>

// return the last element + reverseString(s - 1)

function reverseString(s) {
  if (s === "") return "";
  return s[s.length - 1] + reverseString(s.slice(0, s.length - 1));
}

// console.log(reverseString("hello"));

function reverseStringRedux(s) {
  if (s === "") return "";
  return reverseString(s.slice(1)) + s[0];
}

console.log(reverseStringRedux("hello"));
