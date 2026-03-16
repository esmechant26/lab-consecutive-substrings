function consecutiveSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    let current = "";
    for (let j = i; j < string.length; j++) {
      current += string[j];
      arr.push(current);
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("Expecting: ['e', 'es', 'esm', 'esme', 's', 'sm', 'sme', 'm', 'me', 'e']");
  console.log("=>", consecutiveSubstrings("esme"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;
