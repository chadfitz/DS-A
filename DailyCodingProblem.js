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
        if (i < message.length - 1 && parseInt(message[i + 1]) <= 6) res++;

      }

    }
    if (num === 1) {
      res++;
      if (i < message.length - 1) res++;
    }
  }

  return res;
}

console.log(numDecode('111'));