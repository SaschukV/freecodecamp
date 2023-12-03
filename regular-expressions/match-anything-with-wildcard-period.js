// ❓DESCRIPTION:
// Match Anything with Wildcard Period
// Sometimes you won't (or don't need to) know the exact characters in your patterns.
// Thinking of all words that match, say, a misspelling would take a long time.
// Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character.
//  The wildcard is also called dot and period.
//   You can use the wildcard character just like any other character in the regex.
//    For example, if you wanted to match hug, huh, hut,
//    and hum, you can use the regex /hu./ to match all four words.

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
// Both of these test calls would return true.

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
// Your regex should use the wildcard character.

// ✅ Solution1:(моё решение)
// Если одно совпадение
let exampleStr = "Let's have fun with regular bun expressions!"
let unRegex = /.un/
let result = unRegex.test(exampleStr)
console.log(result) // true
console.log(exampleStr.match(unRegex)) // ['fun',index: 11,input: "Let's have fun with regular bun expressions!",groups: undefined]
//Если много совпадений

let unRegex2 = /.un/g
console.log(exampleStr.match(unRegex2)) //[ 'fun', 'bun' ]
