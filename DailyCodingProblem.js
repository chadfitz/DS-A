// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const twoSum = (list, k) => {
  const pairs = {};

  for (let num of list) {
    if (pairs[num] === undefined) {
      pairs[k - num] = "hi";
    } else {
      return true;
    }
  }

  return false;
}
// console.log(twoSum([10, 15, 3, 7], 17));
// console.log(twoSum([10, 12, 15, 17, 21], 5));

// -------------------------------------------------------------------------------------------------------