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
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?
const productExceptI = (nums) => {
  const res = [];

  let leftTotal = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = leftTotal;
    leftTotal *= nums[i];
  }

  let rightTotal = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = rightTotal;
    rightTotal *= nums[i];
  }

  return res;
}
// console.log(productExceptI([1, 2, 3, 4, 5]));
// console.log(productExceptI([3, 2, 1]));

// -------------------------------------------------------------------------------------------------------
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

// **** not solved
const numDecode = (message) => {
  const letters = {};
  let res = 0;

  for (let i = 0; i < message.length; i++) {
    // console.log("parseInt(message[i]): ", parseInt(message[i]));
    let num = parseInt(message[i]);
    if (num > 2) {
      if (letters[num] === undefined) {
        res++;
        letters[num] = 'true';
      }
    } else if (num === 2) {
      if (letters[num] === undefined) {
        res++;
        letters[num] = 'true';
      }
      if (i < message.length - 1 && parseInt(message[i + 1]) <= 6) {
        if (letters[parseInt(message[i] + message[i + 1])] === undefined) {
          letters[parseInt(message[i] + message[i + 1])] = 'true'
          res++;
        }
      }

    } else if (num === 1) {
      if (letters[num] === undefined) {
        letters[num] = 'true';
        res++;
      }
      if (i < message.length - 1) {
        if (letters[parseInt(message[i] + message[i + 1])] === undefined) {
          letters[parseInt(message[i] + message[i + 1])] = true;
          res++;
        }
      }
    }
    console.log("letters: ", letters);
  }

  return res;
}

// console.log(numDecode('111'));

// -------------------------------------------------------------------------------------------------------
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist
//  in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.
const firstMissingPositive = (nums) => {
  // we are finding the lowest positive integer, so the range of possible outcomes is 1 to nums.length
  
  // make all ints positive 
  // (if they were negative set = nums.length since highest possible value is nums.length)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) nums[i] = nums.length;
  }
  
  // set the int at index num - 1 to negative
  // (num - 1 because lowest value is 1, not 0)
  // use absolute value because we are changing the array in place
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (num < nums.length) nums[num - 1] = -Math.abs(nums[num - 1]);
  }

  // if any index is positive, that index is the answer
  // (that index + 1 because possible values start at 1, not 0, and we shoved in num - 1 before)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }

  // If all indexes are positive, the lowest is nums.length
  return nums.length;
}

// Example usage:
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
// console.log(firstMissingPositive([1, 2, 0])); // Output: 3
// console.log(firstMissingPositive([4, 1, 3, 2, 6])); // Output: 5

// -------------------------------------------------------------------------------------------------------
// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// keep track of values and indices
// edge cases:
  // every value is negative

  // [8, 1, 1, 6, 1, 5, 6] 20
  // [2, 4, 3, 6] 10
  // [2, 4, 6, 3] 8
const largestNonAdjacentSum = (nums) => {
  let incl = 0; // Stores the maximum sum including the previous non-adjacent element
  let excl = 0; // Stores the maximum sum excluding the previous non-adjacent element
  let highest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    console.log("nums[i]: ", nums[i]);
    // Calculate the new inclusive sum by adding the current number and the exclusive sum of the previous element
    let newIncl = excl + nums[i];
    // Update the exclusive sum to be the maximum of previous inclusive and exclusive sums
    excl = Math.max(incl, excl);
    // Update the inclusive sum for the next iteration
    incl = newIncl;

    if (nums[i] > highest) highest = nums[i];
    console.log("incl: ", incl);
    console.log("excl: ", excl);
    console.log("---------------");
  }

  // Return the maximum of inclusive and exclusive sums
  if (highest < 0) return highest;
  return Math.max(incl, excl);
}

// console.log(largestNonAdjacentSum([2,4,6,2,5])); // 13
// console.log(largestNonAdjacentSum([8, 1, 2, 6, 1, 5, 6])); // 20
// console.log(largestNonAdjacentSum([-1, -3, -5, -2])); // -1
// console.log(largestNonAdjacentSum([2, 4, 3, 6])); // 10
// console.log(largestNonAdjacentSum([2, 4, 6, 3])); // 8
// console.log(largestNonAdjacentSum([5,1,1,5]));
// console.log(largestNonAdjacentSum([2,6,3,2,5]));

// -------------------------------------------------------------------------------------------------------
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
const jobScheduler = (f, n) {
  setTimeout(f, n);
}