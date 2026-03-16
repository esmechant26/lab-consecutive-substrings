function consecutiveSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    //loop through each element in string starting at 0
    //declare an empty string to hold the current element
    let current = "";
    for (let j = i; j < string.length; j++) {
      //while the first loop is still at starting place 0, begin the second loop
      //loop runs until it hits the end of the string
      //adds the element at string[j] to the current string
      current += string[j];
      //pushes the updated string current to arr
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
