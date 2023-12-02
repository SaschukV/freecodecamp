// ❓DESCRIPTION:
// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method.
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),
// and returns true or false if your pattern finds something or not.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// The test method here returns true.

// Apply the regex myRegex on the string myString using the .test() method.

// ✅ Solution1:(моё решение)

let myString = 'Hello, World!'
let myRegex = /Hello/
let result = myRegex.test(myString)
console.log(result) //  true
console.log(/dlo/.test(myString)) //  false
