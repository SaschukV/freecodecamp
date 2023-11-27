// ❓DESCRIPTION:
// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with
// a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
//  The starting number will always be less than or equal to the ending number.
//  Your function must use recursion by calling itself and not use loops of any kind.
//   It should also work for cases where both startNum and endNum are the same.

// ✅ Solution1:(моё решение)

function rangeOfNumbers(startNum, endNum = startNum) {
  if (startNum === endNum) {
    return [startNum]
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1)
    countArray.push(endNum)
    return countArray
  }
}
console.log(rangeOfNumbers(4, 10)) // [ 4,5,6,7,8,9,10]
console.log(rangeOfNumbers(3)) // [3]
