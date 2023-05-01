function reverseString(str) {
 split = str.split('')
 reverse = split.reverse()
 join = reverse.join('')
 return join
}

function reverseString2(str) {
  return str.split('').reverse().join('')
}

function reverseString3(str) {
  let newString = ''
  for (let i = str.length-1; i >= 0; i--) {
       newString += str[i]
  }
  return newString
}

function reverseString4(str) {
  return str === '' ? '' : reverseString4(str.substr(1)) + str.charAt(0)
}

console.log(reverseString4('1234'))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString4("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString4("catbaby"));
}

module.exports = reverseString4;

// Please add your pseudocode to this file
// And a written explanation of your solution
