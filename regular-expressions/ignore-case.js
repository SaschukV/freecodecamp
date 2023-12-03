// ❓DESCRIPTION:
// Up until now, you've looked at regexes to do literal matches of strings.
//  But sometimes, you might want to also match case differences.
// You can match both cases using what is called a flag.
// There are other flags but here you'll focus on the flag that ignores case - the i flag.
// You can use it by appending it to the regex. An example of using this flag is /ignorecase/i.
//  This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

// Write a regex fccRegex to match freeCodeCamp, no matter its case.
//  Your regex should not match any abbreviations or variations with spaces.

// ✅ Solution1:(моё решение)

let myString = 'freeCodeCamp'
let fccRegex = /freecodecamP/i // Change this line
let result = fccRegex.test(myString)

console.log(result) // true
