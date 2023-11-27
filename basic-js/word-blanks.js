// ❓DESCRIPTION:
// You will need to use the string concatenation operator + to build a new string,
// using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
// You will then assign the formed string to the wordBlanks variable.
//  You should not change the words assigned to the variables.
// You will also need to account for spaces in your string,
// so that the final sentence has spaces between all the words.
//  The result should be a complete sentence.

// ✅ Solution1:(моё решение)
const myNoun = 'dog'
const myAdjective = 'big'
const myVerb = 'ran'
const myAdverb = 'quickly'

const wordBlanks =
  'My ' + myAdjective + ' ' + myNoun + ' is ' + myVerb + ' very ' + myAdverb
console.log(wordBlanks)
