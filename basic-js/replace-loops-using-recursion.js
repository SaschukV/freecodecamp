// ❓DESCRIPTION:
// Write a recursive function, multiply(arr, n),
// that returns the multiply of the first n elements of an array arr.

// ✅ Solution1:(моё решение)

function multiply1(arr, n) {
  if (n <= 0) {
    return 1
  } else {
    return multiply1(arr, n - 1) * arr[n - 1]
  }
}
console.log(multiply1([2, 2, 3], 3)) // 12

// ✅ Solution2:(моё решение)
function multiply2(arr, n) {
  let product = 1
  for (let i = 0; i < n; i++) {
    product *= arr[i]
  }
  return product
}
console.log(multiply2([2, 2, 3], 3)) // 12

// ❓DESCRIPTION:
// Write a recursive function,sum(arr, n),
// that returns the sum of the first n elements of an array arr.

// ✅ Solution1:(моё решение)
function sum1(arr, n) {
  if (n <= 0) {
    return 0
  } else {
    return sum1(arr, n - 1) + arr[n - 1]
  }
}
console.log(sum1([2, 2, 3], 3)) // 7

// ✅ Solution2:(моё решение)

function sum2(arr, n) {
  let product = 0
  for (let i = 0; i < n; i++) {
    product += arr[i]
  }
  return product
}
console.log(sum2([2, 2, 3], 3)) // 7
