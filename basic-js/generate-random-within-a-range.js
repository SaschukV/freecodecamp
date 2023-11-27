// ❓DESCRIPTION:
// Create a function called randomRange that takes a range myMin and myMax and
// returns a random whole number that's greater than or equal to myMin and
// less than or equal to myMax.

// ✅ Solution1:(моё решение)

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(30, 60)) //45
