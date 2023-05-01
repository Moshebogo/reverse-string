function reverseString(str) {
 split = str.split('')
 reverse = split.reverse()
 join = reverse.join('')
 return join
}

function reverseString2(str) {
  let newstring = ''
  for (let i = str.length-1; i >= 0; i--) {
       newstring += str[i]
  }
  return newstring
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString2("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString2("catbaby"));
}

module.exports = reverseString2;

// Please add your pseudocode to this file
// And a written explanation of your solution
